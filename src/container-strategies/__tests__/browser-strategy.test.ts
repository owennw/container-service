import { browserStrategy } from '../browser-strategy'

describe('browserStrategy', () => {
  it('applies returns true', () => {
    expect(browserStrategy.applies()).toBe(true)
  })

  it('start does not throw an error', () => {
    browserStrategy.start()
  })
})