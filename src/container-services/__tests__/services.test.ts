const mockBrowserService = 'mockBrowserService'
jest.mock('../browser-service', () => ({
  browserService: mockBrowserService,
}))

const mockOpenFinService = 'mockOpenFinService'
jest.mock('../openfin-service', () => ({
  openFinService: mockOpenFinService,
}))

import { services } from '../services'

describe('services', () => {
  it('combines all the services in the correct order', () => {
    expect(services).toEqual([mockOpenFinService, mockBrowserService])
  })
})