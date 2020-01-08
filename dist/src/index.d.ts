import { HttpStatusCode } from './classes/HttpStatusCode.class';
export declare class HttpStatus extends HttpStatusCode {
    private statusCodes;
    constructor();
    getStatusCode(reasonPhrase: string): number;
    getStatusText(statusCode: number): string;
    private setStatusCode;
}
