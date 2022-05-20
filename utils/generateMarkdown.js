// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description 

  ${data.desc}

  ## Usage

  ${data.usage}

  ## Installation

  ${data.install}

  ## Contributions

  ${data.contribute}

  ## Tests

  ${data.test}

  ## License

  ${data.license}

  ## GitHub

  ${data.username}

  ## Email for Questions

  ${data.email}

`;
}

module.exports = generateMarkdown;
