function generateMarkdown(data) {
  return `

  # GitHub Username: **${data.username}**

  ## Project Name: ${data.title}

  ## Description

  ${data.description}

  # Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#test)
  * [Questions](#questions)
  * 
  ## Installation
  To install necessary dependencies, run the following command: ${data.installation}

  ## Usage
  ​This application is used for ${data.usage}

  ## License
  This project is license under the ${data.license} license.

  ## Contributing
   ${data.contributor}

  ## Tests
  To run tests, you need to run the following command: ${data.test}

  ## Questions
  If you have any questions about the repo, open an issue or contact ${data.username} directly ${data.email}.

`;
}

module.exports = generateMarkdown;
