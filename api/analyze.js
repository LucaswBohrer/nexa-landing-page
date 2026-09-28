const demoFallback = {
  summary: "A NEXA encontrou sinais de otimização nos workflows recentes.",
  recommendations: [
    {
      title: "Lead qualification pode ganhar uma etapa de priorização",
      detail: "Separar leads de alta intenção antes da atualização do CRM pode reduzir trabalho manual.",
      impact: "Alto impacto",
      icon: "Zap",
    },
    {
      title: "Relatório semanal pode ser executado mais cedo",
      detail: "Os dados disponíveis sugerem antecipar a janela de execução para reduzir tempo de espera.",
      impact: "Eficiência",
      icon: "Clock3",
    },
    {
      title: "Follow-up automático tem espaço para personalização",
      detail: "Adicionar contexto do último contato pode tornar a próxima ação mais relevante.",
      impact: "Oportunidade",
      icon: "Sparkles",
    },
  ],
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return response.status(503).json({
      error: "GEMINI_API_KEY não configurada na Vercel.",
      ...demoFallback,
    });
  }

  try {
    const body = typeof request.body === "string" ? JSON.parse(request.body) : request.body ?? {};
    const history = Array.isArray(body.history) ? body.history.slice(0, 20) : [];
    const workflowCounts = Array.isArray(body.workflowCounts) ? body.workflowCounts.slice(0, 10) : [];

    const prompt = [
      "Você é a NEXA AI, uma IA de operações para uma plataforma SaaS de automação.",
      "Analise o histórico de execuções e os workflows observados abaixo.",
      "Encontre oportunidades concretas de otimização sem inventar métricas que não aparecem nos dados.",
      "Responda SOMENTE com JSON válido, sem markdown, neste formato:",
      '{"summary":"string","recommendations":[{"title":"string","detail":"string","impact":"string"}]}',
      "Crie de 3 a 4 recomendações curtas, práticas e específicas.",
      "",
      "Histórico:",
      JSON.stringify(history),
      "",
      "Workflows observados:",
      JSON.stringify(workflowCounts),
    ].join("\n");

    const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";
    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.35,
            responseMimeType: "application/json",
          },
        }),
      },
    );

    if (!geminiResponse.ok) {
      const providerError = await geminiResponse.text();
      console.error("Gemini API error:", providerError);
      return response.status(502).json({ error: "O provedor de IA não respondeu corretamente." });
    }

    const providerData = await geminiResponse.json();
    const text = providerData?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return response.status(502).json({ error: "A IA retornou uma resposta vazia." });
    }

    const parsed = JSON.parse(text);
    const recommendations = Array.isArray(parsed.recommendations)
      ? parsed.recommendations
          .slice(0, 4)
          .map((item) => ({
            title: String(item.title ?? "Oportunidade identificada"),
            detail: String(item.detail ?? "A NEXA identificou uma oportunidade de otimização."),
            impact: String(item.impact ?? "Oportunidade"),
          }))
      : [];

    return response.status(200).json({
      summary: String(parsed.summary ?? "Análise concluída com base nos dados enviados."),
      recommendations,
    });
  } catch (error) {
    console.error("NEXA AI analysis error:", error);
    return response.status(500).json({ error: "Não foi possível concluir a análise." });
  }
}
