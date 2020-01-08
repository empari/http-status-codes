declare module "src/classes/HttpStatusCode.class" {
    export class HttpStatusCode {
        private readonly name;
        constructor();
        static ACCEPTED: Number;
        static BAD_GATEWAY: Number;
        static BAD_REQUEST: Number;
        static CONFLICT: Number;
        static CONTINUE: Number;
        static CREATED: Number;
        static EXPECTATION_FAILED: Number;
        static FAILED_DEPENDENCY: Number;
        static FORBIDDEN: Number;
        static GATEWAY_TIMEOUT: Number;
        static GONE: Number;
        static HTTP_VERSION_NOT_SUPPORTED: Number;
        static IM_A_TEAPOT: Number;
        static INSUFFICIENT_SPACE_ON_RESOURCE: Number;
        static INSUFFICIENT_STORAGE: Number;
        static INTERNAL_SERVER_ERROR: Number;
        static LENGTH_REQUIRED: Number;
        static LOCKED: Number;
        static METHOD_FAILURE: Number;
        static METHOD_NOT_ALLOWED: Number;
        static MOVED_PERMANENTLY: Number;
        static MOVED_TEMPORARILY: Number;
        static MULTI_STATUS: Number;
        static MULTIPLE_CHOICES: Number;
        static NETWORK_AUTHENTICATION_REQUIRED: Number;
        static NO_CONTENT: Number;
        static NON_AUTHORITATIVE_INFORMATION: Number;
        static NOT_ACCEPTABLE: Number;
        static NOT_FOUND: Number;
        static NOT_IMPLEMENTED: Number;
        static NOT_MODIFIED: Number;
        static OK: Number;
        static PARTIAL_CONTENT: Number;
        static PAYMENT_REQUIRED: Number;
        static PERMANENT_REDIRECT: Number;
        static PRECONDITION_FAILED: Number;
        static PRECONDITION_REQUIRED: Number;
        static PROCESSING: Number;
        static PROXY_AUTHENTICATION_REQUIRED: Number;
        static REQUEST_HEADER_FIELDS_TOO_LARGE: Number;
        static REQUEST_TIMEOUT: Number;
        static REQUEST_TOO_LONG: Number;
        static REQUEST_URI_TOO_LONG: Number;
        static REQUESTED_RANGE_NOT_SATISFIABLE: Number;
        static RESET_CONTENT: Number;
        static SEE_OTHER: Number;
        static SERVICE_UNAVAILABLE: Number;
        static SWITCHING_PROTOCOLS: Number;
        static TEMPORARY_REDIRECT: Number;
        static TOO_MANY_REQUESTS: Number;
        static UNAUTHORIZED: Number;
        static UNPROCESSABLE_ENTITY: Number;
        static UNSUPPORTED_MEDIA_TYPE: Number;
        static USE_PROXY: Number;
    }
}
declare module "src/index" {
    import { HttpStatusCode } from "src/classes/HttpStatusCode.class";
    export class HttpStatus extends HttpStatusCode {
        private statusCodes;
        constructor();
        getStatusCode(reasonPhrase: string): number;
        getStatusText(statusCode: number): string;
        private setStatusCode;
    }
}
declare module "test/src/index.spec" { }