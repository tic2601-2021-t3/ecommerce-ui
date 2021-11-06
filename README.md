## Pre-requisites
1. Install NodeJS https://nodejs.org/en/download/
2. Install yarn `sudo npm install --global yarn`

## Local Environment
### Run UI on Development Mode
1. `npm install`*
2. `yarn ui-install`* 
3. `yarn dev`
<br/>
*Only require when running it for the first time

### Start NodeJS
1. `yarn build`
2. `yarn server-dev`

## Deployment on Server
1. `yarn build`
2. Pack into a folder: `index.js`,`build`,`production.json`,`package.json`,`package.lock`,`node_modules`
3. Deploy command: `node index.js &`

## Miscellaneous
### Shortcut to open VSC on Terminal
1. `terminal > code .`
