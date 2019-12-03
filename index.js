'use strict'
const alfy = require('alfy')
const {convert} = require('./timestamp')

const output = convert(alfy.input, 'str')
alfy.output(output)
