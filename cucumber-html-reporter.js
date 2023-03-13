const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "jsonlogs",
    reportPath: "reports",
});