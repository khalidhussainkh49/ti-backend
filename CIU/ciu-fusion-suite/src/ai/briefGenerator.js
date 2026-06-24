export function generateBrief(report) {
  return `
INTELLIGENCE BRIEF

TITLE: ${report.title}

SUMMARY:
${report.description.slice(0, 200)}...

RISK LEVEL: ${report.riskScore}/100

KEY FLAGS:
- ${report.flags?.join("\n- ")}

RECOMMENDED ACTION:
- Immediate review by CIU HQ
- Possible escalation to Enforcement Unit

CLASSIFICATION: RESTRICTED
`;
}