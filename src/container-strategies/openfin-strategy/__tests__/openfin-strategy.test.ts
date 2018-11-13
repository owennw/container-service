import { OpenFinStrategy } from '../openfin-strategy'

const createFin = (currentWindow?) => ({
  desktop: {
    Window: {
      getCurrent: jest.fn(() => currentWindow),
    },
    main: jest.fn(cb => cb()),
  },
})

const setup = async (fin?) => {
  const strategy = new OpenFinStrategy(fin)

  if (fin) {
    await strategy.start()
  }

  return strategy
}

describe('OpenFinStrategy', () => {
  describe('applies', () => {
    it('returns true when `fin` exists', async () => {
      const strategy = await setup(createFin())
      expect(strategy.applies()).toBe(true)
    })

    it('returns false when `fin` does not exist', async () => {
      const strategy = await setup()
      expect(strategy.applies()).toBe(false)
    })
  })

  describe('start', async () => {
    let callback
    const mockMain = jest.fn(cb => callback = cb)
    const fin = {
      desktop: {
        main: mockMain,
      },
    }

    it('start does not throw an error', async () => {
      const strategy = new OpenFinStrategy(fin)
      let resolved = false
      const promise = strategy.start()
      expect(mockMain).toHaveBeenCalledTimes(1)
      expect(resolved).toBe(false)
      callback()
      expect(resolved).toBe(false)
      await promise.then(() => resolved = true)
      expect(resolved).toBe(true)
    })
  })

  it('maximize calls the OpenFin API', async () => {
    const mockMaximize = jest.fn()
    const currentWindow = {
      maximize: mockMaximize,
    }

    const fin = createFin(currentWindow)
    const strategy = await setup(fin)

    expect(mockMaximize).toHaveBeenCalledTimes(0)
    strategy.maximize()
    expect(mockMaximize).toHaveBeenCalledTimes(1)
  })

  it('minimize calls the OpenFin API', async () => {
    const mockMinimize = jest.fn()
    const currentWindow = {
      minimize: mockMinimize,
    }

    const fin = createFin(currentWindow)
    const strategy = await setup(fin)

    expect(mockMinimize).toHaveBeenCalledTimes(0)
    strategy.minimize()
    expect(mockMinimize).toHaveBeenCalledTimes(1)
  })
})