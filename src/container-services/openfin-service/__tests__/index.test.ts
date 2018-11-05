const mockFin = {}

const mockGetOpenFin = jest.fn(() => mockFin)
jest.mock('../fin', () => ({
  default: mockGetOpenFin,
}))

let constructedMockOpenFinService

const mockOpenFinService = class {
  private fin
  constructor(fin) {
    expect(fin).toBe(mockFin)
    constructedMockOpenFinService = this
  }
}
jest.mock('../openfin-service', () => ({
  default: mockOpenFinService,
}))
import OpenFinService from '../openfin-service'

import openFinService from '../index'

describe('openFinService', () => {
  it('is constructed with fin', () => {
    expect(mockGetOpenFin).toHaveBeenCalledTimes(1)
    expect(openFinService).toBe(constructedMockOpenFinService)
  })
})