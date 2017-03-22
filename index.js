#!/usr/bin/env node

'use strict';

const woofwoof = require('woofwoof');
var chalk = require('chalk');
var figlet = require('figlet');

const cli = woofwoof(`
    Usage
    $ greet <input>

    Options
    --name, -n  Who should I greet

`, {
    alias: {
        n: 'name'
    },
    default: {
        name: "World!"
    }
});

clear();
console.log(chalk.yellow(figlet.textSync('Greeting', {horizontalLayout: 'full'})));

function hello(input, flags) {
    console.log(`Hello ${flags.name}!`);
}

hello(cli.input[0], cli.flags);