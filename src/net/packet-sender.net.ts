import { createSocket, Socket } from 'dgram';
import VoyagerConfig from '../config/voyager.config';

export default class PacketSender {
    private socket: Socket;
    private host: string;
    private port: string;
    // private voyagerConfig: VoyagerConfig;

    constructor(host: string, port: string, voyagerConfig: VoyagerConfig) {
        this.socket = createSocket('udp4');
        this.host = host;
        this.port = port;
        this.socket.setTTL(1);
    }

    sendPacket(packet: Buffer, port: number, address: string) {
        return new Promise((resolve, reject) => {
            this.socket.send(packet, port, address, (err, res) => {
                if (err){
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }


}