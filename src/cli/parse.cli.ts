import { Option, OptionValues } from "commander";

export default class CLIParser {
    private options: OptionValues;

    constructor(options: OptionValues) {
        this.options = options;
    }

    processHostname(hostname: string) {
        console.log(`Initializing Voyager Diagnostics on ${hostname}...`);
    }
}