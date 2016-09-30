# Instalação

Passo 1: Clone este repositório na pasta do projeto.

```bash
$ git clone <%= projectRepository %> <%= projectName %>
$ cd <%= projectName %>
```

Passo 2: Instale o projeto.

```bash
$ npm i
```

Caso hajam dúvidas, consulte os scripts disponívels no arquivo `package.json` e execute-os com o comando:

```bash
$ npm run [script]
```

## Conteúdo

+ Node Sass
+ ESLint
+ *Browserify* usado com o transform *Babelify* [ presets: es2015, stage-0 e react ]
+ UglifyJS
+ Jade Template Engine
+ Browser-Sync
+ SVGO
+ React para manipulação do DOM em aplicações específicas

## Scripts

+ `build:js`
+ `build:css`
+ `build:html`
+ `build:images`
+ `build` (para build total)
+ `watch:css`
+ `watch:js`
+ `watch:img`
+ `watch:html`
+ `serve`
+ `start` (para watch total e servir arquivos) -> nesse caso, em específico, usa-se o comando `npm start`

### Observação

O Eslint, por padrão, vem inativado, pois pode impedir o build caso o JS não esteja respeitando as regras definidas no `.eslintrc.js`. Para habilitá-lo, insira o trecho `npm run lint && ` no início do script `build:js`.
