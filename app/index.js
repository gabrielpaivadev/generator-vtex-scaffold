var generators = require('yeoman-generator');

var _ = require('lodash');

var packages = [
  "autoprefixer",
  "babel-eslint",
  "babel-preset-es2015",
  "babel-preset-react",
  "babel-preset-stage-0",
  "babelify",
  "browser-sync",
  "browserify",
  "eslint",
  "eslint-config-airbnb",
  "eslint-plugin-import",
  "eslint-plugin-jsx-a11y",
  "eslint-plugin-react",
  "hamburgers",
  "imagemin-cli",
  "jade",
  "node-sass",
  "onchange",
  "parallelshell",
  "postcss-cli",
  "react",
  "react-dom",
  "svgo",
  "sweetalert",
  "uglify-js",
  "vanilla-lazyload"
];

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply( this, arguments );
    this.argument( 'appfolder', { type: String, required: false } );
  },
  initializing: function () {
    this.destinationRoot( this.appfolder );
  },
  prompting: function () {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Project name',
      default : this.appfolder || this.appname
    }, {
      type    : 'input',
      name    : 'description',
      message : 'Project description',
      default : 'Template VTEX'
    }, {
      type    : 'input',
      name    : 'repository',
      message : 'URL of the remote repository'
    }, {
      type    : 'input',
      name    : 'authorName',
      message : 'Project author name'
    }, {
      type    : 'input',
      name    : 'authorEmail',
      message : 'Project author email'
    }]).then(function (answers) {
      this.projectName = answers.name;
      this.projectKebabName = _.kebabCase(answers.name);
      this.projectDescription = answers.description;
      this.projectRepository = answers.repository;
      this.projectAuthorName = answers.authorName;
      this.projectAuthorEmail = answers.authorEmail;
    }.bind(this));
  },
  writing: function () {
    var tplVars = {
      projectName: this.projectName,
      projectKebabName: this.projectKebabName,
      projectDescription: this.projectDescription,
      projectRepository: this.projectRepository,
      projectAuthorName: this.projectAuthorName,
      projectAuthorEmail: this.projectAuthorEmail
    };

    this.fs.copyTpl(
      this.sourceRoot(),
      this.destinationRoot(),
      tplVars
    );

    this.copy('_babelrc', '.babelrc');
    this.copy('_editorconfig', '.editorconfig');
    this.copy('_eslintrc.js', '.eslintrc.js');
    this.copy('_gitignore', '.gitignore');
  },
  install: function () {
    this.npmInstall(packages, { 'saveDev': true });
  },
  removeFiles: function () {
    this.fs.delete('_babelrc')
    this.fs.delete('_editorconfig')
    this.fs.delete('_eslintrc.js')
    this.fs.delete('_gitignore')
  }
});
