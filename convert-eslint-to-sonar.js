const fs = require('fs');

const eslintReport = JSON.parse(fs.readFileSync('eslint-report.json', 'utf8'));

const sonarIssues = [];

eslintReport.forEach(file => {
  file.messages.forEach(msg => {
    sonarIssues.push({
      engineId: "eslint",
      ruleId: msg.ruleId,
      type: "CODE_SMELL",
      severity: msg.severity === 2 ? "MAJOR" : "MINOR",
      primaryLocation: {
        message: msg.message,
        filePath: file.filePath,
        textRange: {
          startLine: msg.line,
          endLine: msg.endLine || msg.line
        }
      },
      tags: ["eslint"]
    });
  });
});

fs.writeFileSync('sonar-report.json', JSON.stringify({ issues: sonarIssues }, null, 2));
