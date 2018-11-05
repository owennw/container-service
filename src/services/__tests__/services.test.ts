const mockBrowserService = class {}
jest.mock('../browser-service', () => ({
  default: mockBrowserService,
}))

import services from '../services'

describe('services', () => {
  it('combines all the services in the correct order', () => {
    expect(services).toEqual([new mockBrowserService()])
  })
})