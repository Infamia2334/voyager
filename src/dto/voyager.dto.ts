export interface HopResult {
    ttl: number;
    ip: string;
    hostname: string;
    latency?: number;
    responseType: ResponseType;
}

export interface ResponseType {
    type: string;
    code: number;
    details: string;
}

export interface VoyagerConfig  {
    destination: string;
    timeoutMs: number;
    portRange: number[];
}

