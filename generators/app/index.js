var generators = require('yeoman-generator');

var _ = require('lodash');

var packages = [
    // "autoprefixer",
    // "babel-eslint",
    // "babel-preset-es2015",
    // "babel-preset-react",
    // "babel-preset-stage-0",
    // "babelify",
    // "browser-sync",
    // "browserify",
    // "css-mqpacker",
    // "cssnano-cli",
    // "eslint",
    // "eslint-config-airbnb",
    // "eslint-plugin-import",
    // "eslint-plugin-jsx-a11y",
    // "eslint-plugin-react",
    // "imagemin-cli",
    // "includes",
    // "jade",
    // "onchange",
    // "parallelshell",
    // "postcss-cli",
    // "postcss-import",
    // "postcss-mixins",
    // "postcss-nested",
    // "postcss-simple-vars",
    // "svg-sprite-generator",
    // "svgo",
    // "uglify-js"
];

module.exports = generators.Base.extend({
    prompting: function () {
        return this.prompt([{
            type    : 'input',
            name    : 'name',
            message : 'Project name',
            default : this.appname
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
            name    : 'author',
            message : 'Project author'
        }]).then(function (answers) {
            this.projectName = _answers.name;
            this.projectCamelCaseName = _.camelCase(answers.name);
            this.projectDescription = answers.description;
            this.projectRepository = answers.repository;
            this.projectAuthor = answers.author;
        }.bind(this));
    },
    writing: function () {
        this.fs.copyTpl(
            this.sourceRoot(),
            this.destinationRoot(),
            {
                projectName: this.projectName,
                projectCamelCaseName: this.projectCamelCaseName,
                projectDescription: this.projectDescription,
                projectRepository: this.projectRepository,
                projectAuthor: this.projectAuthor
            }
        );
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
