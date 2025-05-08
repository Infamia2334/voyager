#! /usr/bin/env node
import { Command } from "commander";
import CLIParser from "./cli/parse.cli";

const program = new Command();

program
.name('voyager')
  .description('A CLI tool for network diagnostics')
  .version('1.0.0')
  .option('--max-hops <number>', 'Maximum number of hops', parseInt)
  .option('--timeout-ms <number>', 'Timeout in milliseconds', parseInt)
  .option('--retries <number>', 'Number of retries', parseInt)
  .option('--json', 'Output results in JSON format')
  .option('--resolve-hostnames', 'Resolve hostnames to IP addresses');

  const cliParser = new CLIParser(program.opts());
  program.argument('<hostname>', 'Hostname')
    .description('')
    .action((hostname) => {
      cliParser.processHostname(hostname);
    });


program.parse(process.argv);
// console.log(options);



