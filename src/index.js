// Copyright (c) The Official Dev
// TOD License v1

const loader = require('./loader')
const Log = require('./u/logger')
const { join } = require('path')

module.exports = (dirname, folder, ...args) => {
    if(!dirname) return new Log('No dirname specified.', 'todutils')
    if(!folder) return new Log('No utils folder specified.', 'todutils')
    
    return loader(join(dirname, folder), ...args)
}