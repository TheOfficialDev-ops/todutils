// Copyright (c) The Official Dev
// TOD License v1

require('colors')

const baseErr = `[The Official Dev UTILS]:[{loc}] error : {msg}`
const baseLog = `[The Official Dev UTILS]:[{loc}] log : {msg}`

let str = ''

module.exports = class {
    constructor(msg, loc, err = false) {
        if(err) {
            str = baseErr.replace('{loc}', loc)
            str = str.replace('{msg}', msg)

            console.log(str.red)
            return
        } else {
            str = baseLog.replace('{loc}', loc)
            str = str.replace('{msg}', msg)

            console.log(str.blue)
            return
        }
    }
}