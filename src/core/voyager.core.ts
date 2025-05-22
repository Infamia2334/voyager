import VoyagerConfig from "../config/voyager.config";
import { HopResult } from "../dto/voyager.dto";
import PacketSender from "../net/packet-sender.net";
import ResponseListener from "../net/response-listener.net";

export default class VoyagerCoreEngine {
    private config: VoyagerConfig;

    private packetSender: PacketSender;

    private resListener: ResponseListener;



    constructor(config: VoyagerConfig, packetSender: PacketSender, resListener: ResponseListener) {
        this.config = config;
        this.packetSender = packetSender;
        this.resListener = resListener;
    }

    async run(): Promise<HopResult[]> {
        const maxHops = this.config.getMaxHops();

        for (let ttl = 1; ttl <= this.config.getMaxHops(); ttl++) {
            this.packetSender.sendPacket(Buffer.from(''), this.config.getPort(), this.config.getHostName)
        }
    }
}