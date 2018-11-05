const globalAny: any = global

const originalFin = globalAny.fin

import getOpenFin from '../fin'

describe('getOpenFin', () => {
  afterEach(() => {
    globalAny.fin = originalFin
  })

  it('returns the fin object from the window', () => {
    const mockFin = {}
    globalAny.fin = mockFin
    expect(getOpenFin()).toBe(mockFin)
  })

  it('returns the undefined from the window if not running in OpenFin', () => {
    expect(getOpenFin()).toBeUndefined()
  })
})