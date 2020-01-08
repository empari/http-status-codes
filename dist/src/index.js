"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatusCode_class_1 = require("./classes/HttpStatusCode.class");
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
//# sourceMappingURL=index.js.map