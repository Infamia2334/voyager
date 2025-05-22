import { OptionValues } from 'commander';
import 'dotenv/config';

export default class VoyagerConfig {
    private maxHops!: number;
    private timeouteMs!: number;
    private retries!: number;
    private json!: boolean;
    private resolveHostnames!: boolean;

    constructor (hostname: string, port: number, options: OptionValues) {
        if (!hostname || hostname === '') {
            throw new Error('Hostname must be present for voyager diagnostics');
        }
        
        const {
            maxHops,
            timeoutMs,
            retries,
            json,
            resolveHostnames
        } = options;

        if (maxHops) {
            if (typeof maxHops !== 'number' || maxHops <= 0) {
                throw new Error('Max hops must be a positive number for voyager diagnostics.')
            }
            this.maxHops = maxHops ?? (process.env.MAX_HOPS ? parseInt(process.env.MAX_HOPS) : 12);
        }

        if (timeoutMs) {
            if (typeof timeoutMs !== 'number' || timeoutMs <= 0) {
                throw new Error('Timeout must be a positive number for voyager diagnostics.')
            }
            this.timeouteMs = timeoutMs ?? (process.env.TIMEOUT_MS ? parseInt(process.env.TIMEOUT_MS) : 2000);
        }

        if (retries) {
            if (typeof retries !== 'number' || retries <= 0) {
                throw new Error('Retries must be a positive number for voyager diagnostics.')
            }
            this.retries = retries ?? (process.env.RETRIES ? parseInt(process.env.RETRIES) : 3);
        }
        
        if (json) {
            if (typeof json !== 'boolean') {
                throw new Error('JSON must be a boolean for voyager diagnostics.')
            }
            this.json = json ?? (process.env.JSON ? process.env.JSON === 'true' : false);
        }

        if (resolveHostnames) {
            if (typeof resolveHostnames !== 'boolean') {
                throw new Error('Resolve hostnames must be a boolean for voyager diagnostics.')
            }
            this.resolveHostnames = resolveHostnames ?? (process.env.RESOLVE_HOSTNAMES ? process.env.RESOLVE_HOSTNAMES === 'true' : false);
        }
    }

    setMaxHops(maxHops: number) {
        this.maxHops = maxHops;
    }

    setTimeoutMs(timeoutMs: number) {
        this.timeouteMs = timeoutMs;
    }

    setRetries(retries: number) {
        this.retries = retries;
    }

    getMaxHops() {
        return this.maxHops;
    }

    getTimeoutMs() {
        return this.timeouteMs;
    }

    getRetries() {
        return this.retries;
    }
}