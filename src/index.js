// Copyright (c) The Official Dev
// TOD License v1

const version = '1.0.1'

const loader = require('./loader')
const Log = require('./u/logger')
const { join } = require('path')

module.exports = (dirname, folder, ...args) => {
    if(!dirname) return new Log('No dirname specified.', 'todutils', true)
    if(!folder) return new Log('No utils folder specified.', 'todutils', true)

    new Log(`Loading The Official Dev Utils v.${version}`)
    
    return loader(join(dirname, folder), ...args)
}