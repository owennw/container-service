import containerService from '../index'

describe('containerService', () => {
  it('has a double function', () => {
    expect(containerService.double(5)).toBe(10)
  })
})