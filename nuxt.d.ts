type LogMessageType = undefined | null | 'warning' | 'error'
type LogMessage = [Date, string, LogMessageType]
type LogFn = (s: string) => void;
type PromiseFn = (a: unknown | PromiseLike<any>) => any
interface MspData {
    type: 'bf' | 'qs' | 'kiss' | 'inav' | null,
    protocol_version: number
    api_version: string,
    batteryData: {
        cellCount: number,
        capacity: number,
        voltage: number,
        drawn: number,
        amps: number
    } | null,
    motorCount: number
}

interface FourWayResponse {
    command: number;
    address: number;
    ack: number;
    checksum: number;
    params: Uint8Array;
}

type SettingsType = 'select' | 'bool' | 'string' | 'number' | 'rtttl';
type SettingsSelectOptionsType = { label: string, value: number };

interface HexData {
    address: number,
    bytes: number,
    data: number[]
}

interface Hex {
    data: HexData[],
    endOfFile: boolean,
    bytes: number,
    startLinearAddress: number
}

interface BlobFolderFile {
    name: string;
    url: string;
}

interface BlobFolder {
    name: string,
    files: BlobFolderFile[],
    children: BlobFolder[]
}

declare module 'bluejay-rtttl-parse' {
    export default class Rtttl {
        static fromBluejayStartupMelody(startUpMelody: Uint8Array, name?: string): string;
        static toBluejayStartupMelody(rtttl: string, length?: number): {
            data: Uint8Array,
            errorCodes: number[]
        };
    }
};
