declare module 'sha256' {
    import * as sha256 from 'sha256';
    export function getSha256(message: string): string;
}