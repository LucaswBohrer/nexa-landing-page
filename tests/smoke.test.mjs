import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const requiredFiles = [
  "src/App.tsx",
  "src/pages/Login.tsx",
  "src/pages/Dashboard.tsx",
  "src/pages/Workflows.tsx",
  "src/pages/Analytics.tsx",
  "src/pages/Activity.tsx",
  "src/pages/Settings.tsx",
  "src/pages/AI.tsx",
  "public/favicon.svg",
  "public/og-image.svg",
  "vercel.json",
];

test("NEXA project smoke test: required product surfaces exist", () => {
  for (const file of requiredFiles) {
    assert.equal(fs.existsSync(path.join(root, file)), true, file);
  }
});

test("NEXA routes include the dashboard workspace", () => {
  const app = fs.readFileSync(path.join(root, "src/App.tsx"), "utf8");
  assert.match(app, /\/dashboard/);
  assert.match(app, /\/login/);
});
