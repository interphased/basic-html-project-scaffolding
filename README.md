# Basic HTML Project Scaffolding
Basic HTML project scaffolding with Composer, NPM, Webpack, &amp; Bootstrap.

## Overview
This project helps speed up the process of setting up a simple HTML project. It creates a maintainable directory structure in addition to configuring Composer, NPM, Webpack, and Bootstrap - and that's basically it. The project is intentionally bare so you can fit it to your needs. By default it uses SCSS but you can easily replace it with anything.

## Project Tree
```
.
├── dist
|   ├── assets
|   |   ├── css
|   |   └── js
|   └── index.html
├── src
|   ├── js
|   |   └── application.js
|   ├── scss
|   |   └── application.scss
|   └── vendor
|
├── package.json
└── webpack.mix.js

```

## Getting Started
**Prerequirements:** You must have [Composer](https://getcomposer.org/) and [Node.js](https://nodejs.org/) installed on your system. It's pretty easy to install them, just follow the instructions on their websites.

1. Add composer packages to `composer.json` and run `composer update` to download and install them.
2. Add NPM packages to `package.json` and run `npm install` to download and install them.
3. Run `npm run dev`, `npm run production`, or `npm run watch` to compile your assets.