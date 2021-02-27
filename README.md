<p align="center">
  <a href="https://single-spa.js.org/docs/ecosystem-react/">
    <img src="https://i.morioh.com/54a1591e11.png" width="400" alt="Single SPA whti React" />
  </a>
</p>

<p align="center">Framework for bringing together multiple JavaScript microfrontends in a frontend application! 🚀</p>

<div align="center">

[![react](https://raw.githubusercontent.com/aleen42/badges/master/src/react.svg)](https://aleen42.github.io/badges/src/react.svg)
[![npm](https://raw.githubusercontent.com/aleen42/badges/master/src/npm.svg)](https://aleen42.github.io/badges/src/npm.svg)

</div>

## Overview

Single-spa is basically responsible to orchestrate all MFE, by sharing dependencies, loading a MFE into another, mounting and unmounting the MFEs.
- Types of Microfrontends
- In the context of single-spa, there are three kinds of microfrontends:
	> * Single-spa applications: Microfrontends that render components for a set of specific routes.
  > * Single-spa parcels: Microfrontends that render components without controlling routes.
  > * Utility modules: Microfrontends that export shared JavaScript logic without rendering components.
- They recommend a setup that uses in-browser ES modules + import maps (or SystemJS to polyfill these if you need better browser support).

## Getting started

#### 1. Creating the root orchestrer
- Run `npx create-single-spa`
- Inform:
  > * Proj. Directory: single-spa
  > * Choose "single-spa root config"
  > * yarn/npm?
  > * typescript? 
  > * single-spa layout engine? N
  > * Org. Name: om
- Run `yarn start` to initiate  

#### 2. Creating a first mfe application
- Run `npx create-single-spa`
- Inform:
  > * Proj. Directory: react-single
  > * Choose "single-spa application / parcel"
  > * Framework? react/vue/angular...
  > * yarn/npm?
  > * typescript? 
  > * Org. Name: om
  > * Proj. Name: react-single
- Run `yarn start -- --port 8500` to initiate 

#### 3. On __single-spa\src\index.ejs__ change:
```js
<% if (isLocal) { %>
  <script type="systemjs-importmap">
    {
      "imports": {
        "@rm/root-config": "//localhost:9000/rm-root-config.js"
      }
    }
  </script>
<% } %>
```
to
```js
<% if (isLocal) { %>
  <script type="systemjs-importmap">
    {
      "imports": {
        "@rm/root-config": "//localhost:9000/rm-root-config.js"
        "@rm/react-single": "//localhost:8500/rm-react-single.js"
      }
    }
  </script>
<% } %>
```

#### 4. On __single-spa\src\rm-root-config.js__ add this:
```js
registerApplication({
  name: "@rm/react-single",
  app: () =>
    System.import(
      "@rm/react-single" // Local mfe
    ),
  activeWhen: ["/react-single"], //route
});  
```

#### 5. On __single-spa\src\index.ejs__ change:
```js
<script type="systemjs-importmap">
  {
    "imports": {
      "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js"
    }
  }
</script>
```
to
```js
<script type="systemjs-importmap">
  {
    "imports": {
      "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js"
      "react": "https://unpkg.com/react@17/umd/react.production.min.js",
      "react-dom": "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"
    }
  }
</script>
```

#### Using [lerna](https://lerna.js.org/) to run the project

Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.

##### Init
To initiate the lerna tool in your microfrontend environment, just put all mfe applications inside a folder called '__package__', and than:
```sh
[path_to_your_project]>/yarn add -D -W lerna
[path_to_your_project]>/npx lerna init
```

## Running the project

In order to correctly run this project you must follow the steps:

- Clone the projetct: `[path]>/git clone https://github.com/robertomorel/micro-frontend-single-spa-aplication.git`
- Install all dependencies: `[path/micro-frontend-single-spa-aplication]>/yarn install`
- Finally run: `[path/micro-frontend-single-spa-aplication]>/yarn start`

At this point you should be good to go 🚀

<hr>

## Guide videos (_besides the official docs, ofcourse_)😉

- [Implementando micro front-end com Single SPA e React](https://www.youtube.com/watch?v=68LaXOWwxZI)
- [How to Use Lerna](https://www.youtube.com/watch?v=p6qoJ4apCjA) 

## About me

Well guys, lets talk 🤗

[Github](https://github.com/robertomorel)

[LinkedIn](https://www.linkedin.com/in/roberto-morel-6b9065193/)
