
# Link to the [GitHub Page](https://yun-vis.net/ustp-cicd-final/)

## Run the release version

Make sure that you have [nodejs](https://nodejs.org/en/download/current) installed.

```bash
$ cd TO_THE_SUBFOLDER_THAT_CONTAIN_proxy.js
$ node proxy.js
```

# Developer Instructions 

## how to build and test the application locally

```bash
# Download the repository
$ git clone git@github.com:yun-vis/ustp-cicd-final.git
# Go to the repository
$ cd ustp-cicd-final
# Install the dependency
$ npm install
# Run unit test
$ npm run test
# Build the project
$ npm run build
# Preview the project
$ npm run preview
```

# Status Badges for all Workflows

[![Node.js CI](https://github.com/yun-vis/ustp-cicd-final/actions/workflows/build.yml/badge.svg?event=push)](https://github.com/yun-vis/ustp-cicd-final/actions/workflows/build.yml) 
![Coverage](https://codecov.io/gh/yun-vis/ustp-cicd-final/branch/main/graph/badge.svg)

[![Deploy to GitHub Pages](https://github.com/yun-vis/ustp-cicd-final/actions/workflows/build_page.yml/badge.svg)](https://github.com/yun-vis/ustp-cicd-final/actions/workflows/build_page.yml)

[![Automatic Publish GitHub Release](https://github.com/yun-vis/ustp-cicd-final/actions/workflows/release.yml/badge.svg)](https://github.com/yun-vis/ustp-cicd-final/actions/workflows/release.yml)

[![Dependabot Updates](https://github.com/yun-vis/ustp-cicd-final/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/yun-vis/ustp-cicd-final/actions/workflows/dependabot/dependabot-updates)

[![Spell Check Markdown Files](https://github.com/yun-vis/ustp-cicd-final/actions/workflows/spellcheck.yml/badge.svg)](https://github.com/yun-vis/ustp-cicd-final/actions/workflows/spellcheck.yml)