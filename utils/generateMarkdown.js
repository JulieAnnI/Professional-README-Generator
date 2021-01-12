// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "No License") {
    return ``;
  } else if(license === "MIT") {
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }else if(license === "GPLv2") {
      return `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
  }else if(license === "Apache") {
      return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  }else if(license === "GPLv3") {
      return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }else if(license === "BSD 3-clause") {
      return `![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)`;
  }else if (license === "Unlicense") {
      return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "No License") {
    return ``;
  } else if (license === "MIT") {
      return `https://opensource.org/licenses/MIT`;
  }else if(license === "GPLv2") {
      return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`;
  }else if(license === "Apache") {
      return `https://opensource.org/licenses/Apache-2.0`;
  }else if(license === "GPLv3") {
      return `https://www.gnu.org/licenses/gpl-3.0`;
  }else if(license === "BSD 3-clause") {
      return `https://opensource.org/licenses/BSD-3-Clause`;
  }else if (license === "Unlicense") {
      return `http://unlicense.org/`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, github) {
  if (license === "No License") {
    return ``;
  } else {
    return `Copyright (c)  ${github}.
    This project is [${license}](${renderLicenseLink(license)}) licensed.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}  

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Credits](#Credits)
  - [Contributing](#Contributing)
  - [Questions](#Questions)
  - [License](#License)
  - [Tests](#Tests)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  ${data.screenshots}
  
  ## Credits
  
  ${data.credits}
  
  ## Contributing 
  
  ${data.contributing}
  
  ## Questions
  
  To ask questions about this project please contact me through the following sources:
  - Email: ${data.email}
  - Github:  https://github.com/${data.github}
  
  ${data.questions}
  
  ## License
  
  ${renderLicenseSection(data.license, data.github)}
  
  ## Tests
  
  ${data.tests}`;
};

module.exports = generateMarkdown;
