# Basic HTML Project Scaffolding
Basic HTML project scaffolding with Gulp, Bower, &amp; LESS.

## Overview
This project helps speed up the process of setting up a simple HTML project. It creates a maintainable directory structure in addition to configuring Gulp and Bower - and that's basically it. The project is intentionally bare so you can do whatever you want. By default it uses LESS but you can easily replace it with SASS or whatever you want.

## Project Tree
```
.
├── assets
|   ├── js
|   |   └── application.js
|   ├── less
|   |   └── application.less
|   └── vendor
|
├── public
|   ├── assets
|   |   ├── css
|   |   └── js
|   └── index.html
|
├── bower.json
├── gulpfile.js
├── package.json
```

## Getting Started
**Prerequirements:** You must have [Node.js](https://nodejs.org/) installed on your system. It's pretty easy, just follow the instructions on their website. You should also install bower and gulp globally (`npm install -g bower gulp`).

1. Install node packages with `npm install`
2. Add bower the components you want to install to `bower.json`. You can find them on GitHub or via [Bower search](http://bower.io/search/).
3. Install bower components with `bower install`
4. Add javascripts to `gulpfile.js`
5. Import stylesheets in `assets/less/application.less`
5. Run `gulp watch`