import { Command } from "commander";

class VoyageCLI {
    private program: Command;

    constructor() {
        this.program = new Command()
    }

    version(version: string) {
        this.program.version(version, '-v, --version', 'Output the current version');
    }

    description(description: string) {
        this.program.description(description);
    }

    option(flags: string, description?: string, defaultValue?: string | boolean | string[]) {
        this.program.option(flags, description, defaultValue);
    }

    command(name: string, description: string) {
        this.program
            .command(name)
            .description(description)
            // .action()
    }
}