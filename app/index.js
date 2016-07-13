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
  "css-mqpacker",
  "cssnano-cli",
  "eslint",
  "eslint-config-airbnb",
  "eslint-plugin-import",
  "eslint-plugin-jsx-a11y",
  "eslint-plugin-react",
  "imagemin-cli",
  "jade",
  "onchange",
  "parallelshell",
  "postcss-cli",
  "postcss-import",
  "postcss-mixins",
  "postcss-nested",
  "postcss-simple-vars",
  "react",
  "react-addons-css-transition-group",
  "react-dom",
  "svgo",
  "uglify-js"
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
      this.projectAuthor = answers.authorName;
      this.projectAuthor = answers.authorEmail;
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
  paths: function () {

  },
  method1: function () {
    this.log(this.projectname);
  }
});
