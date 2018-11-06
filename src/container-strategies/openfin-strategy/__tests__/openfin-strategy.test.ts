import { OpenFinStrategy } from '../openfin-strategy'

const setup = fin => {
  const strategy = new OpenFinStrategy(fin)

  if (fin) {
    strategy.start()
  }

  return strategy
}

describe('OpenFinStrategy', () => {
  describe('applies', () => {
    it('returns true when `fin` exists', () => {
      const strategy = setup({})
      expect(strategy.applies()).toBe(true)
    })

    it('returns true when `fin` does not exist', () => {
      const strategy = setup(undefined)
      expect(strategy.applies()).toBe(false)
    })
  })

  it('start does not throw an error', () => {
    const strategy = setup({})
  })

  it('maximize calls the OpenFin API', () => {
    const mockMaximize = jest.fn()
    const fin = {
      desktop: {
        Window: {
          getCurrent: () => ({
            maximize: mockMaximize,
          }),
        },
      },
    }

    const strategy = setup(fin)

    expect(mockMaximize).toHaveBeenCalledTimes(0)
    strategy.maximize()
    expect(mockMaximize).toHaveBeenCalledTimes(1)
  })
})