import BrowserService from '../browser-service'

const browserService = new BrowserService()

describe('BrowserService', () => {
  it('applies returns true', () => {
    expect(browserService.applies()).toBe(true)
  })

  it('start does not throw an error', () => {
    browserService.start()
  })
})