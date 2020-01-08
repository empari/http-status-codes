import expect from 'expect'
import { HttpStatus } from '../../src/index'

describe('Main', () => {
  const spy: HttpStatus = new HttpStatus()

  test('should returns code 200 when method OK is called', () => {
    expect(HttpStatus.OK).toBe(200)
  })

  test('should returns code "Accepted" when method getStatusText is called with param "202"', () => {
    expect(spy.getStatusText(202)).toBe('Accepted')
  })

  test('should returns code 505 when method getStatusCode is called with param "Bad Gateway"', () => {
    expect(spy.getStatusCode('Bad Gateway')).toBe(502)
  })
})
