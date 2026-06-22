// @ts-ignore Vitest runs in Node; this project does not install @types/node.
import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const auditPath = "docs/audits/2026-06-23-portfolio-proof-audit.md";

describe("portfolio proof audit artifact", () => {
  const audit = readFileSync(auditPath, "utf8");

  it("covers the DIO-95 route and proof-risk scope", () => {
    const requiredTerms = [
      "DIO-95",
      "DIO-69",
      "Root route",
      "About route",
      "Work route",
      "Writing route",
      "Photography route",
      "Archive route",
      "Game/experiment route",
      "stale claims",
      "retired demos",
      "Udacity/Heroku",
      "contact behavior",
      "accessibility",
      "mobile layout",
    ];

    for (const term of requiredTerms) {
      expect(audit).toContain(term);
    }
  });

  it("records validation evidence and follow-up fix tickets", () => {
    expect(audit).toContain("## Validation Evidence");
    expect(audit).toContain("## Fix Tickets");
    expect(audit).toContain("npm run test -- tests/proof-audit.spec.ts");
    expect(audit).toMatch(/DIO-\d+|Proposed ticket:/);
  });
});
