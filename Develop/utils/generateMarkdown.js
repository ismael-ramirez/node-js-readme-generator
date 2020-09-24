function generateMarkdown(data) {

  return `# **${data.title}**                 [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
  # Project Description
  ${data.description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # License
  ${data.license}
  # Contributors
  ${data.contributors}
  # Tests
  ${data.tests}
  # Questions
  Any questions contact on Github ${data.github} or email at ${data.email}.
`;
}

module.exports = generateMarkdown;
