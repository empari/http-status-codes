import { HttpStatusCode } from './classes/HttpStatusCode.class'

export class HttpStatus extends HttpStatusCode {
  private statusCodes: string[] = []

  constructor () {
    super()
    this.setStatusCode()
  }

  public getStatusCode (reasonPhrase: string): number {
    let statusCode: number = 0
    this.statusCodes.forEach((value, key) => {
      if (this.statusCodes[key] === reasonPhrase) {
        statusCode = key
      }
    })
    if (statusCode > 0) return statusCode
    throw new Error('Reason phrase does not exist: ' + reasonPhrase)
  }

  public getStatusText (statusCode: number): string {
    try {
      return this.statusCodes[statusCode]
    } catch (error) {
      throw new Error(`Status code does not exist: ${statusCode}`)
    }
  }

  private setStatusCode (): void {
    this.statusCodes[(HttpStatusCode.ACCEPTED = 202)] = 'Accepted'
    this.statusCodes[(HttpStatusCode.BAD_GATEWAY = 502)] = 'Bad Gateway'
    this.statusCodes[(HttpStatusCode.BAD_REQUEST = 400)] = 'Bad Request'
    this.statusCodes[(HttpStatusCode.CONFLICT = 409)] = 'Conflict'
    this.statusCodes[(HttpStatusCode.CONTINUE = 100)] = 'Continue'
    this.statusCodes[(HttpStatusCode.CREATED = 201)] = 'Created'
    this.statusCodes[(HttpStatusCode.EXPECTATION_FAILED = 417)] =
      'Expectation Failed'
    this.statusCodes[(HttpStatusCode.FAILED_DEPENDENCY = 424)] =
      'Failed Dependency'
    this.statusCodes[(HttpStatusCode.FORBIDDEN = 403)] = 'Forbidden'
    this.statusCodes[(HttpStatusCode.GATEWAY_TIMEOUT = 504)] = 'Gateway Timeout'
    this.statusCodes[(HttpStatusCode.GONE = 410)] = 'Gone'
    this.statusCodes[(HttpStatusCode.HTTP_VERSION_NOT_SUPPORTED = 505)] =
      'HTTP Version Not Supported'
    this.statusCodes[(HttpStatusCode.IM_A_TEAPOT = 418)] = "I'm a teapot"
    this.statusCodes[(HttpStatusCode.INSUFFICIENT_SPACE_ON_RESOURCE = 419)] =
      'Insufficient Space on Resource'
    this.statusCodes[(HttpStatusCode.INSUFFICIENT_STORAGE = 507)] =
      'Insufficient Storage'
    this.statusCodes[(HttpStatusCode.INTERNAL_SERVER_ERROR = 500)] =
      'Internal Server Error'
    this.statusCodes[(HttpStatusCode.LENGTH_REQUIRED = 411)] = 'Length Required'
    this.statusCodes[(HttpStatusCode.LOCKED = 423)] = 'Locked'
    this.statusCodes[(HttpStatusCode.METHOD_FAILURE = 420)] = 'Method Failure'
    this.statusCodes[(HttpStatusCode.METHOD_NOT_ALLOWED = 405)] =
      'Method Not Allowed'
    this.statusCodes[(HttpStatusCode.MOVED_PERMANENTLY = 301)] =
      'Moved Permanently'
    this.statusCodes[(HttpStatusCode.MOVED_TEMPORARILY = 302)] =
      'Moved Temporarily'
    this.statusCodes[(HttpStatusCode.MULTI_STATUS = 207)] = 'Multi-Status'
    this.statusCodes[(HttpStatusCode.MULTIPLE_CHOICES = 300)] =
      'Multiple Choices'
    this.statusCodes[(HttpStatusCode.NETWORK_AUTHENTICATION_REQUIRED = 511)] =
      'Network Authentication Required'
    this.statusCodes[(HttpStatusCode.NO_CONTENT = 204)] = 'No Content'
    this.statusCodes[(HttpStatusCode.NON_AUTHORITATIVE_INFORMATION = 203)] =
      'Non Authoritative Information'
    this.statusCodes[(HttpStatusCode.NOT_ACCEPTABLE = 406)] = 'Not Acceptable'
    this.statusCodes[(HttpStatusCode.NOT_FOUND = 404)] = 'Not Found'
    this.statusCodes[(HttpStatusCode.NOT_IMPLEMENTED = 501)] = 'Not Implemented'
    this.statusCodes[(HttpStatusCode.NOT_MODIFIED = 304)] = 'Not Modified'
    this.statusCodes[(HttpStatusCode.OK = 200)] = 'OK'
    this.statusCodes[(HttpStatusCode.PARTIAL_CONTENT = 206)] = 'Partial Content'
    this.statusCodes[(HttpStatusCode.PAYMENT_REQUIRED = 402)] =
      'Payment Required'
    this.statusCodes[(HttpStatusCode.PERMANENT_REDIRECT = 308)] =
      'Permanent Redirect'
    this.statusCodes[(HttpStatusCode.PRECONDITION_FAILED = 412)] =
      'Precondition Failed'
    this.statusCodes[(HttpStatusCode.PRECONDITION_REQUIRED = 428)] =
      'Precondition Required'
    this.statusCodes[(HttpStatusCode.PROCESSING = 102)] = 'Processing'
    this.statusCodes[(HttpStatusCode.PROXY_AUTHENTICATION_REQUIRED = 407)] =
      'Proxy Authentication Required'
    this.statusCodes[(HttpStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE = 431)] =
      'Request Header Fields Too Large'
    this.statusCodes[(HttpStatusCode.REQUEST_TIMEOUT = 408)] = 'Request Timeout'
    this.statusCodes[(HttpStatusCode.REQUEST_TOO_LONG = 413)] =
      'Request Entity Too Large'
    this.statusCodes[(HttpStatusCode.REQUEST_URI_TOO_LONG = 414)] =
      'Request-URI Too Long'
    this.statusCodes[(HttpStatusCode.REQUESTED_RANGE_NOT_SATISFIABLE = 416)] =
      'Requested Range Not Satisfiable'
    this.statusCodes[(HttpStatusCode.RESET_CONTENT = 205)] = 'Reset Content'
    this.statusCodes[(HttpStatusCode.SEE_OTHER = 303)] = 'See Other'
    this.statusCodes[(HttpStatusCode.SERVICE_UNAVAILABLE = 503)] =
      'Service Unavailable'
    this.statusCodes[(HttpStatusCode.SWITCHING_PROTOCOLS = 101)] =
      'Switching Protocols'
    this.statusCodes[(HttpStatusCode.TEMPORARY_REDIRECT = 307)] =
      'Temporary Redirect'
    this.statusCodes[(HttpStatusCode.TOO_MANY_REQUESTS = 429)] =
      'Too Many Requests'
    this.statusCodes[(HttpStatusCode.UNAUTHORIZED = 401)] = 'Unauthorized'
    this.statusCodes[(HttpStatusCode.UNPROCESSABLE_ENTITY = 422)] =
      'Unprocessable Entity'
    this.statusCodes[(HttpStatusCode.UNSUPPORTED_MEDIA_TYPE = 415)] =
      'Unsupported Media Type'
    this.statusCodes[(HttpStatusCode.USE_PROXY = 305)] = 'Use Proxy'
  }
}
