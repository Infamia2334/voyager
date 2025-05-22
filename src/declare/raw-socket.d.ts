

declare module 'raw-socket' {
    import { Socket } from 'net';

    type Options = {
        protocol?: number;
        addressFamily?: number;
        ipHeader?: boolean;
        ttl?: number
    }

    type OnRecvCallback = (buffer: Buffer, source: string) => void;

    interface RawSocket {
      on(event: "message", callback: OnRecvCallback): void;
      on(event: string, callback: (...args: any[]) => void): void;
      send(buffer: Buffer, offset: number, length: number, address: string, callback?: (err?: Error, bytes?: number) => void): void;
      close(): void;
    }
  
    export function createSocket(options?: Options): RawSocket;
}