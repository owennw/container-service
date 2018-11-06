const mockFin = {}

const mockGetOpenFin = jest.fn(() => mockFin)
jest.mock('../fin', () => ({
  getOpenFin: mockGetOpenFin,
}))

let constructedMockOpenFinService

const mockOpenFinService = class {
  constructor(fin) {
    expect(fin).toBe(mockFin)
    constructedMockOpenFinService = this
  }
}
jest.mock('../openfin-service', () => ({
  OpenFinService: mockOpenFinService,
}))

import { openFinService } from '../index'

describe('openFinService', () => {
  it('is constructed with fin', () => {
    expect(mockGetOpenFin).toHaveBeenCalledTimes(1)
    expect(openFinService).toBe(constructedMockOpenFinService)
  })
})