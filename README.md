![alt text](https://github.com/AJ-TechSoul/ELECTRON-4-PHP/blob/master/electron4php.jpg?raw=true)
# ELECTRON-4-PHP
An easiest way to use php in electron.
- *For now its only supports MAC. And windows and Linux will be supported if php will be installed. I invite openly everyone to contribute in this project and make it working in window and linux also.*

**Clone and run for a quick way to see Electron4PHP in action.**
```
git clone https://github.com/AJ-TechSoul/ELECTRON-4-PHP/
cd ELECTRON-4-PHP
npm install
npm start
```

**Use this app along with the [Electron API Demos](http://electron.atom.io/#get-started) app for API code examples to help you get started.**

A basic Electron4PHP application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.php` - A web page to render. This is the app's **renderer process**.


## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/AJ-TechSoul/ELECTRON-4-PHP
# Go into the repository
cd ELECTRON-4-PHP
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.


## Configuration
You can pass a callback to the run method, this will get called when the PHP server is up and running. If you don't pass a callback to the run method, a promise will be returned that resolves when the PHP server is up and running. These you need to do at main.js file from where you find comment of // PHP SERVER CREATION /////

## Configuration

Name | Default | Description
-----|---------|------------
`php` | `php` | The php command file
`host` | `127.0.0.1` | The server's host
`port` | `8000` | The port used
`directory` | `null` | The document root. By default is the current working directory
`script` | `null` | The "router" script
`stdio` | `inherit` | stdio option passed to the spawned process - https://nodejs.org/api/child_process.html#child_process_options_stdio
`directives` | `{}` | An object with the custom PHP directives
`config` | `null` | The path of a custom php.ini file
`env` | `process.env` | The environment variables passed

Example:

```js
const PHPServer = require('php-server-manager');

const server = new PHPServer({
    port: 3000,
    directives: {
        display_errors: 0,
        expose_php: 0
    }
});

server.run();
```

## Use with gulp

```js
gulp.task('php-server', done => {
    const server = new PHPServer({
        directory: 'public',
        script: 'public/index.php'
    });

    server.run(done);
});
```

## License

[CC0 1.0 (Public Domain)](LICENSE.md)

## Credits (Thank You) 

OSCAROTERO FOR PHP SERVER
https://github.com/oscarotero/php-server-manager

ELECTRON
https://electronjs.org/
