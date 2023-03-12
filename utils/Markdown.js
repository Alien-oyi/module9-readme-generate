class MarkDown {
    static placeAnswers(answers) {
        return `
# ${answers.title}

## Table of Content
- [Project description](#Description)
- [Deployed Link](#Deployed Link)
- [Screenshot](#Screenshot)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Questions](#Questions)
- [License](#License)
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


## If you have any Questions?
feel free to reach:<br/> 
https://github.com/${answers.GitHubUserName}<br/>
${answers.email}

## Lisence
${answers.lisence} 

`
    }
}

module.exports= MarkDown