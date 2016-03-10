# PFED (Painless Front-End Development)

Just like what the title suggests, this is a very Painless Front-End Development setup created for developers who don't have much time to study and writing Gulp pipings and/or Grunt configs.

If you're like me, you'll love this npm-only setup.

## Initialization

Open up your Shell Console and install the latest [NPM](https://www.npmjs.com/) globally:

```
$ sudo npm install npm@latest -g
```

Download and install the dependencies:

```
$ npm install
```

>**Note**: A new directory called `node_modules` will be created  after the installation. This directory will contain all the dependency for this setup. DO NOT tinker around its content (I suggest adding it to your .gitignore list if you're using git).

### What it sets up

##### Development Dependencies
- [postcss-cli](https://www.npmjs.com/package/postcss-cli) with [autoprefixr](https://www.npmjs.com/package/autoprefixr): for automatically adding vendor prefixes required by the project's supported browsers
- [browser-sync](https://www.npmjs.com/package/browser-sync): for live-reload and multiple-device debugging
- [eslint](https://www.npmjs.com/package/eslint), [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard), and [eslint-plugin-standard](https://www.npmjs.com/package/eslint-plugin-standard): for linting ES/JS files
- [imagemin-cli](https://www.npmjs.com/package/imagemin-cli): for compressing image assets
- [node-sass](https://www.npmjs.com/package/node-sass): for preprocessing the .scss files and compressing the outputted CSS
- [npm-run-all](https://www.npmjs.com/package/npm-run-all): for running multiple npm-scripts in parallel or sequential
- [onchange](https://www.npmjs.com/package/onchange): for detecting changes on files real-time
- [svg-sprite-generator](https://www.npmjs.com/package/svg-sprite-generator) and [svgo](https://www.npmjs.com/package/svgo): for compressing svg files and compiling all svg files into one
- [uglifyjs2](https://www.npmjs.com/package/uglifyjs2): for minifying the JS files

Once the installation is complete, you can start your Front-End Development! That's as painless as an ant bite (where 'ant' != Ant-Man)

## Development using the PFED npm tasks

### The Directories

I've created a few starting files for your CSS and JS (and even a sample icon)

- **CSS** (`src/scss`): PFED uses SCSS and this directory is where all of your SCSS files should go. It doesn't really matter how the sub-directores under this is structured the order of rules can be controlled via the `main.scss` file. The sub-directory structure is completely up to you.

- **JavaScript** (`src/js`): This directory is where all of your JS files should go. Unlike in our CSS setup, this one's a little strict. Just make sure you only add your additional JS files to the `src/js/modules` directory. The only time you should add your JS files to the `src/js/utils` is when you need to add a dependency (e.g. jQuery) that needs to be loaded first before your scripts inside the `src/js/modules` directory. In short, the concatenation order of JS is `src/js/utils/*.js`, then `src/js/*.js` , and then `src/js/modules/*.js`.

### The Build Tasks

To compile and compress the CSS, JS, and image assets, run the following on your project's root directory

- Compile CSS files:

	```
	$ npm run build:css
	```

- Compile JavaScript files:

	```
	$ npm run build:js
	```

- Compress and Compile image assets and svg files:

	```
	$ npm run build:images
	```

- Run all three build scripts at once:

	```
	$ npm run build
	```

### The Watch Tasks

The watch tasks utilize BrowserSync to easily live-reload the browser as (CSS, JS, HTML) changes are being made to the files inside the project directory. It also enables other devices connected to the same network to access your BrowserSync served folder.

```
$ npm run watch
```

Your default browser will open up a new tab serving your project via `localhost:3030`

Also, you can view BrowserSync's UI via `localhost:3031`

>**Note**: The `npm run watch` task DOES NOT track changes made to your image assets (because the image compressing tasks can take a lot of time running). As a workaround, you can run `npm run build:image` on a separate Shell Console, then refresh your BrowserSync-served page.

>**Note**: Using `alert()` on JavaScript will cause BrowserSync to malfunction, use `console.log()` for debugging instead.

---

That's about it!

Should I feel less lazy anytime soon, I'll update this README and add explanations on how this whole thing works.