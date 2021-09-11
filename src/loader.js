// Copyright (c) The Official Dev
// TOD License v1

const { readdirSync } = require('fs')

const Log = require('./u/logger')

module.exports = (dir, ...args) => {
    const loaded = readdirSync(dir)

    loaded.forEach(file => {
        if(!file.endsWith('.js')) return;
        if(file.endsWith('.ign.js')) return;

        const element = require(dir + '/' + file)

        try {
            element(...args)
            return new Log(`Successfully ran the util ${element.show}`, 'utils/loader')
        } catch (e) {
            return new Log(`An error occured while trying to execute the util "${element.show}"`, 'utils/loader', true)
        }
    });
}