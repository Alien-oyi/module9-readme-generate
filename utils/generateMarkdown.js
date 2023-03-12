// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var licenses = [
    {
        name: "MIT",
        value: {name: "MIT", value: "https://img.shields.io/badge/License-MIT-yellow.svg"},
        short: "MIT"
    },
    {
        name: "Apache 2.0",
        value: {name: "Apache 2.0", value: "https://img.shields.io/badge/License-Apache_2.0-blue.svg"},
        short: "Apache 2.0"
    },
    {
        name: "GNU GPL v3.0",
        value: {name: "GNU GPL v3.0", value: "https://img.shields.io/badge/License-GPLv3-blue.svg"},
        short: "GNU GPL v3"
    },
    {
        name: "Mozilla 2.0",
        value: {name: "Mozilla 2.0", value: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg"},
        short: "Mozilla 2.0"
    },
    {
        name: "Eclipse 1.0",
        value: {name: "Eclipse 1.0", value:"https://img.shields.io/badge/License-EPL_1.0-red.svg"},
        short: "Eclipse 1.0"
    }
]
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
