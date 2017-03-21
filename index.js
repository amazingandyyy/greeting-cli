#!/usr/bin/env node

'use strict';

const woofwoof = require('woofwoof');

const cli = woofwoof(`
    Usage
    $ hello <input>

    Options
    --name, -n  Who should I greet

`, {
    alias: {
        n: 'name'
    }, default: {
        name: "world"
    }
});

function hello(input,flags) {
    console.log("hello "+flags.name);
}


hello(cli.input[0], cli.flags);