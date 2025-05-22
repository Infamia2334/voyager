import { createSocket, RawSocket } from 'raw-socket';

export default class ResponseListener {
    private socket: RawSocket;

    constructor() {
        this.socket = createSocket({ protocol: 1 });
    }

    startListening() {
        this.socket.on('message', (buffer, source) => {
            console.log(`Received packet from ${source}: ${buffer.toString('hex')}`);
        })
    }
}