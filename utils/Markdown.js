class MarkDown {
    
    static renderLicenseBadge(license) {
        const licenses = {
            mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            apache: '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)',
            gnu: '[![License: GNU GPL v3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)',
            mozilla: '[![License: Mozilla 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://www.mozilla.org/en-US/MPL/2.0/)',
            eclipse: '[![License: Eclipse 1.0](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://www.eclipse.org/legal/epl-v10.html)'
        }
        return licenses[license]
    };

    static renderLicenseLink(license) {
        const licenseLinks = {
            mit: '[MIT](https://choosealicense.com/licenses/mit/)',
            apache: '[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)',
            gnu: '[GNU GPL v3.0](https://choosealicense.com/licenses/gpl-3.0/)',
            mozilla: '[Mozilla 2.0](https://www.mozilla.org/en-US/MPL/2.0/)',
            eclipse: '[Eclipse 1.0](https://www.eclipse.org/legal/epl-v10.html)',
        }
        return licenseLinks[license]
    }

    static renderLicenseSection(license) {
        if (license) {
            return `License link: ${this.renderLicenseLink(license)}`
        } else {
            return "Please pick a valid license."
        }
    }

    static placeAnswers(answers) {
        return `
# ${answers.title}

${this.renderLicenseBadge(answers.license)}

## Table of Contents
- [Project Description](#description)
- [Deployed Link](#deployed-link)
- [Screenshot](#screenshot)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)

## Description
${answers.description}

## Deployed Link
${answers.deployedLink}

## Screenshot
![App Screenshot](${answers.screenshot})

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contribution}

## Questions
If you have any questions or want to contribute, please feel free to reach out:

- [GitHub](https://github.com/${answers.GitHubUserName})
- [Email](mailto:${answers.email})

## License
${this.renderLicenseSection(answers.license)}
`
    }
}

module.exports = MarkDown;
