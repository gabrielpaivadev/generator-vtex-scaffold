# VTEX Generator

Yeoman generator that scaffolds out a VTEX project using NPM Scripts as build tool.

## Features
* ES2015 and JSX using Browserify and Babel
* Node Sass
* Built-in preview server with BrowserSync
* Lint your scripts with ESLint
* Image and SVG optimization
* Jade Template Engine and VTEX specific mixins

## Getting Started
* Install Yeoman: `npm install -g yo`
* Install the generator: `npm install -g generator-vtex-scaffold`
* Run the generator in the project folder with: `yo vtex-scaffold` or specify the folder with `yo vtex-scaffold project-name`
* Use the available scripts.

## Available scripts
Use `npm run script-name` to run any of these:
* `build:html`
* `build:css`
* `build:js`
* `build:images`
* `build` (runs all build tasks above)
* `watch:html`
* `watch:css`
* `watch:js`
* `watch:img`
* `serve`
* `start` (runs build tasks and then runs watch tasks and serve) -> in this unique case, run with `npm start`

###### Made with :heart: by [GTX Agency](http://www.gtx.ag/)
