import { browserService } from '../browser-service'

describe('BrowserService', () => {
  it('applies returns true', () => {
    expect(browserService.applies()).toBe(true)
  })

  it('start does not throw an error', () => {
    browserService.start()
  })
})