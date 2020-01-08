var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("src/classes/HttpStatusCode.class", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class HttpStatusCode {
        constructor() {
            this.name = 'HttpStatusCode';
        }
    }
    exports.HttpStatusCode = HttpStatusCode;
    HttpStatusCode.ACCEPTED = 202;
    HttpStatusCode.BAD_GATEWAY = 502;
    HttpStatusCode.BAD_REQUEST = 400;
    HttpStatusCode.CONFLICT = 409;
    HttpStatusCode.CONTINUE = 100;
    HttpStatusCode.CREATED = 201;
    HttpStatusCode.EXPECTATION_FAILED = 417;
    HttpStatusCode.FAILED_DEPENDENCY = 424;
    HttpStatusCode.FORBIDDEN = 403;
    HttpStatusCode.GATEWAY_TIMEOUT = 504;
    HttpStatusCode.GONE = 410;
    HttpStatusCode.HTTP_VERSION_NOT_SUPPORTED = 505;
    HttpStatusCode.IM_A_TEAPOT = 418;
    HttpStatusCode.INSUFFICIENT_SPACE_ON_RESOURCE = 419;
    HttpStatusCode.INSUFFICIENT_STORAGE = 507;
    HttpStatusCode.INTERNAL_SERVER_ERROR = 500;
    HttpStatusCode.LENGTH_REQUIRED = 411;
    HttpStatusCode.LOCKED = 423;
    HttpStatusCode.METHOD_FAILURE = 420;
    HttpStatusCode.METHOD_NOT_ALLOWED = 405;
    HttpStatusCode.MOVED_PERMANENTLY = 301;
    HttpStatusCode.MOVED_TEMPORARILY = 302;
    HttpStatusCode.MULTI_STATUS = 207;
    HttpStatusCode.MULTIPLE_CHOICES = 300;
    HttpStatusCode.NETWORK_AUTHENTICATION_REQUIRED = 511;
    HttpStatusCode.NO_CONTENT = 204;
    HttpStatusCode.NON_AUTHORITATIVE_INFORMATION = 203;
    HttpStatusCode.NOT_ACCEPTABLE = 406;
    HttpStatusCode.NOT_FOUND = 404;
    HttpStatusCode.NOT_IMPLEMENTED = 501;
    HttpStatusCode.NOT_MODIFIED = 304;
    HttpStatusCode.OK = 200;
    HttpStatusCode.PARTIAL_CONTENT = 206;
    HttpStatusCode.PAYMENT_REQUIRED = 402;
    HttpStatusCode.PERMANENT_REDIRECT = 308;
    HttpStatusCode.PRECONDITION_FAILED = 412;
    HttpStatusCode.PRECONDITION_REQUIRED = 428;
    HttpStatusCode.PROCESSING = 102;
    HttpStatusCode.PROXY_AUTHENTICATION_REQUIRED = 407;
    HttpStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
    HttpStatusCode.REQUEST_TIMEOUT = 408;
    HttpStatusCode.REQUEST_TOO_LONG = 413;
    HttpStatusCode.REQUEST_URI_TOO_LONG = 414;
    HttpStatusCode.REQUESTED_RANGE_NOT_SATISFIABLE = 416;
    HttpStatusCode.RESET_CONTENT = 205;
    HttpStatusCode.SEE_OTHER = 303;
    HttpStatusCode.SERVICE_UNAVAILABLE = 503;
    HttpStatusCode.SWITCHING_PROTOCOLS = 101;
    HttpStatusCode.TEMPORARY_REDIRECT = 307;
    HttpStatusCode.TOO_MANY_REQUESTS = 429;
    HttpStatusCode.UNAUTHORIZED = 401;
    HttpStatusCode.UNPROCESSABLE_ENTITY = 422;
    HttpStatusCode.UNSUPPORTED_MEDIA_TYPE = 415;
    HttpStatusCode.USE_PROXY = 305;
});
define("src/index", ["require", "exports", "src/classes/HttpStatusCode.class"], function (require, exports, HttpStatusCode_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class HttpStatus extends HttpStatusCode_class_1.HttpStatusCode {
        constructor() {
            super();
            this.statusCodes = [];
            this.setStatusCode();
        }
        getStatusCode(reasonPhrase) {
            let statusCode = 0;
            this.statusCodes.forEach((value, key) => {
                if (this.statusCodes[key] === reasonPhrase) {
                    statusCode = key;
                }
            });
            if (statusCode > 0)
                return statusCode;
            throw new Error('Reason phrase does not exist: ' + reasonPhrase);
        }
        getStatusText(statusCode) {
            try {
                return this.statusCodes[statusCode];
            }
            catch (error) {
                throw new Error(`Status code does not exist: ${statusCode}`);
            }
        }
        setStatusCode() {
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.ACCEPTED = 202)] = 'Accepted';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.BAD_GATEWAY = 502)] = 'Bad Gateway';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.BAD_REQUEST = 400)] = 'Bad Request';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.CONFLICT = 409)] = 'Conflict';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.CONTINUE = 100)] = 'Continue';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.CREATED = 201)] = 'Created';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.EXPECTATION_FAILED = 417)] =
                'Expectation Failed';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.FAILED_DEPENDENCY = 424)] =
                'Failed Dependency';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.FORBIDDEN = 403)] = 'Forbidden';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.GATEWAY_TIMEOUT = 504)] = 'Gateway Timeout';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.GONE = 410)] = 'Gone';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.HTTP_VERSION_NOT_SUPPORTED = 505)] =
                'HTTP Version Not Supported';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.IM_A_TEAPOT = 418)] = "I'm a teapot";
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.INSUFFICIENT_SPACE_ON_RESOURCE = 419)] =
                'Insufficient Space on Resource';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.INSUFFICIENT_STORAGE = 507)] =
                'Insufficient Storage';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.INTERNAL_SERVER_ERROR = 500)] =
                'Internal Server Error';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.LENGTH_REQUIRED = 411)] = 'Length Required';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.LOCKED = 423)] = 'Locked';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.METHOD_FAILURE = 420)] = 'Method Failure';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.METHOD_NOT_ALLOWED = 405)] =
                'Method Not Allowed';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.MOVED_PERMANENTLY = 301)] =
                'Moved Permanently';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.MOVED_TEMPORARILY = 302)] =
                'Moved Temporarily';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.MULTI_STATUS = 207)] = 'Multi-Status';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.MULTIPLE_CHOICES = 300)] =
                'Multiple Choices';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.NETWORK_AUTHENTICATION_REQUIRED = 511)] =
                'Network Authentication Required';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.NO_CONTENT = 204)] = 'No Content';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.NON_AUTHORITATIVE_INFORMATION = 203)] =
                'Non Authoritative Information';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.NOT_ACCEPTABLE = 406)] = 'Not Acceptable';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.NOT_FOUND = 404)] = 'Not Found';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.NOT_IMPLEMENTED = 501)] = 'Not Implemented';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.NOT_MODIFIED = 304)] = 'Not Modified';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.OK = 200)] = 'OK';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.PARTIAL_CONTENT = 206)] = 'Partial Content';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.PAYMENT_REQUIRED = 402)] =
                'Payment Required';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.PERMANENT_REDIRECT = 308)] =
                'Permanent Redirect';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.PRECONDITION_FAILED = 412)] =
                'Precondition Failed';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.PRECONDITION_REQUIRED = 428)] =
                'Precondition Required';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.PROCESSING = 102)] = 'Processing';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.PROXY_AUTHENTICATION_REQUIRED = 407)] =
                'Proxy Authentication Required';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE = 431)] =
                'Request Header Fields Too Large';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.REQUEST_TIMEOUT = 408)] = 'Request Timeout';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.REQUEST_TOO_LONG = 413)] =
                'Request Entity Too Large';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.REQUEST_URI_TOO_LONG = 414)] =
                'Request-URI Too Long';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.REQUESTED_RANGE_NOT_SATISFIABLE = 416)] =
                'Requested Range Not Satisfiable';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.RESET_CONTENT = 205)] = 'Reset Content';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.SEE_OTHER = 303)] = 'See Other';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.SERVICE_UNAVAILABLE = 503)] =
                'Service Unavailable';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.SWITCHING_PROTOCOLS = 101)] =
                'Switching Protocols';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.TEMPORARY_REDIRECT = 307)] =
                'Temporary Redirect';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.TOO_MANY_REQUESTS = 429)] =
                'Too Many Requests';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.UNAUTHORIZED = 401)] = 'Unauthorized';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.UNPROCESSABLE_ENTITY = 422)] =
                'Unprocessable Entity';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.UNSUPPORTED_MEDIA_TYPE = 415)] =
                'Unsupported Media Type';
            this.statusCodes[(HttpStatusCode_class_1.HttpStatusCode.USE_PROXY = 305)] = 'Use Proxy';
        }
    }
    exports.HttpStatus = HttpStatus;
});
define("test/src/index.spec", ["require", "exports", "expect", "src/index"], function (require, exports, expect_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    expect_1 = __importDefault(expect_1);
    describe('Main', () => {
        const spy = new index_1.HttpStatus();
        test('should returns code 200 when method OK is called', () => {
            expect_1.default(index_1.HttpStatus.OK).toBe(200);
        });
        test('should returns code "Accepted" when method getStatusText is called with param "202"', () => {
            expect_1.default(spy.getStatusText(202)).toBe('Accepted');
        });
        test('should returns code 505 when method getStatusCode is called with param "Bad Gateway"', () => {
            expect_1.default(spy.getStatusCode('Bad Gateway')).toBe(502);
        });
    });
});
//# sourceMappingURL=http-status-codes.js.map