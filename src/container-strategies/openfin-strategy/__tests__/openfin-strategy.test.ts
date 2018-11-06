import { OpenFinStrategy } from '../openfin-strategy'

describe('OpenFinStrategy', () => {
  describe('applies', () => {
    it('returns true when `fin` exists', () => {
      const fin = {}
      const openfinStrategy = new OpenFinStrategy(fin)
      expect(openfinStrategy.applies()).toBe(true)
    })

    it('returns true when `fin` does not exist', () => {
      const fin = undefined
      const openfinStrategy = new OpenFinStrategy(fin)
      expect(openfinStrategy.applies()).toBe(false)
    })
  })

  it('start does not throw an error', () => {
    const fin = {}
    const openfinStrategy = new OpenFinStrategy(fin)
    openfinStrategy.start()
  })
})