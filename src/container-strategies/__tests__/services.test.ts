const mockBrowserStrategy = 'mockBrowserStrategy'
jest.mock('../browser-strategy', () => ({
  browserStrategy: mockBrowserStrategy,
}))

const mockOpenFinStrategy = 'mockOpenFinStrategy'
jest.mock('../openfin-strategy', () => ({
  openFinStrategy: mockOpenFinStrategy,
}))

import { strategies } from '../strategies'

describe('strategies', () => {
  it('combines all the strategies in the correct order', () => {
    expect(strategies).toEqual([mockOpenFinStrategy, mockBrowserStrategy])
  })
})