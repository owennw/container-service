const mockFin = {}

const mockGetOpenFin = jest.fn(() => mockFin)
jest.mock('../fin', () => ({
  getOpenFin: mockGetOpenFin,
}))

let constructedMockOpenFinStrategy

const mockOpenFinStrategy = class {
  constructor(fin) {
    expect(fin).toBe(mockFin)
    constructedMockOpenFinStrategy = this
  }
}
jest.mock('../openfin-strategy', () => ({
  OpenFinStrategy: mockOpenFinStrategy,
}))

import { openFinStrategy } from '../index'

describe('openFinStrategy', () => {
  it('is constructed with fin', () => {
    expect(mockGetOpenFin).toHaveBeenCalledTimes(1)
    expect(openFinStrategy).toBe(constructedMockOpenFinStrategy)
  })
})