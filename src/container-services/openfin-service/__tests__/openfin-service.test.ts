import { OpenFinService } from '../openfin-service'

describe('OpenFinService', () => {
  describe('applies', () => {
    it('returns true when `fin` exists', () => {
      const fin = {}
      const openfinService = new OpenFinService(fin)
      expect(openfinService.applies()).toBe(true)
    })

    it('returns true when `fin` does not exist', () => {
      const fin = undefined
      const openfinService = new OpenFinService(fin)
      expect(openfinService.applies()).toBe(false)
    })
  })

  it('start does not throw an error', () => {
    const fin = {}
    const openfinService = new OpenFinService(fin)
    openfinService.start()
  })
})