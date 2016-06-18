# Instalação

Passo 1: Clone este repositório na pasta do projeto.

```bash
$ git clone git@bitbucket.org:gtxdev/vtex-fullstack.git __nome-do-projeto__
$ cd __nome-do-projeto__
```

Passo 2: Aponte seu repositório local para o repositório do projeto em questão.

```bash
$ git remote rename origin upstream
$ git remote add origin URL_DO_NOVO_REPOSITORIO
$ git commit -m "Commit inicial."
$ git push origin master
```

Passo 3: Instale o projeto.

```bash
$ npm i
```

Caso hajam dúvidas, consulte os scripts disponívels no arquivo `package.json` e execute-os com o comando.

```bash
$ npm run [script]
```

## Conteúdo

+ PostCSS
+ ESLint
+ *Browserify* usado com o transform *Babelify* [ presets: es2015, stage-0 e react ]
+ UglifyJS
+ Jade Template Engine
+ Browser-Sync
+ *SVGO* e *SVG Sprite Generate*

## Scripts

+ `build:js`
+ `build:css`
+ `build:html`
+ `build:images`
+ `build` (para build total)
+ `watch:css`
+ `watch:js`
+ `watch:html`
+ `watch` (para watch total e servir arquivos)
+ `serve`

### Observação

Considere desativar o Eslint, que poderá impedir o build caso o JS não esteja respeitando as regras definidas no `.eslintrc.js`. Para isso, apague o trecho `npm run lint &&` do script `build:js`.

# TODO

+ Adicionar watch de imagens e svg
+ Atualizar Jade para Pug
