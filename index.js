#!/usr/bin/env node

const pckg = require('./package.json')
const cli = require('commander')
const commandtpl = require('./commands/command')

cli.version(pckg.version)

/* Command section */
cli
  .command('command <requiredArg> [optionalArg]')
  .alias('c')
  .description('command template')
  .action( (requiredArg, optionalArg) => {
    commandtpl(requiredArg, optionalArg)
  })

cli.parse(process.argv)
