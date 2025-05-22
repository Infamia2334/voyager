#! /usr/bin/env node
import { Command } from "commander";
import CLIParser from "./cli/parse.cli";
import VoyagerConfig from "./config/voyager.config";

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

  const options = program.opts();


  // const cliParser = new CLIParser(options);
  program
    .argument('<hostname>', 'Hostname')
    .argument('<port>', 'Target Port [optional]')
    .description('')
    .action((hostname, port) => {
      const voyagerConfig = new VoyagerConfig(hostname, port, options);
      
    });


program.parse(process.argv);
// console.log(options);



