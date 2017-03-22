#!/usr/bin/env node

'use strict';

const woofwoof = require('woofwoof');

const cli = woofwoof(`
    Usage
    $ greet <input>

    Options
    --name, -n  Who should I greet

`, {
    alias: {
        n: 'name'
    }, default: {
        name: "World!"
    }
});

function hello(input,flags) {
    console.log(`Hello ${flags.name}!`);
}


hello(cli.input[0], cli.flags);