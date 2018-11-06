import { ContainerService } from '../container-service'
import { IContainerStrategy } from '../container-strategies'

const createMockService = ({
  applies = true,
  start = jest.fn(),
  maximize = jest.fn(),
  minimize = jest.fn(),
}): IContainerStrategy => ({
  applies: () => applies,
  start,
  maximize,
  minimize,
})

describe('Container Service', () => {
  describe('selecting the strategy', () => {
    const service1Applies = false
    const service1Start = jest.fn()
    const mockService1 = createMockService({ applies: service1Applies, start: service1Start })

    const service2Applies = true
    const service2Start = jest.fn()
    const mockService2 = createMockService({ applies: service2Applies, start: service2Start })

    beforeEach(() => {
      service1Start.mockReset()
      service2Start.mockReset()
    })

    it('selects the first strategy that applies (1)', () => {
      const containerService = new ContainerService([mockService1, mockService2])
      containerService.start()

      expect(service1Start).toHaveBeenCalledTimes(0)
      expect(service2Start).toHaveBeenCalledTimes(1)
    })

    it('selects the first strategy that applies (2)', () => {
      const containerService = new ContainerService([mockService2, mockService1])
      containerService.start()

      expect(service1Start).toHaveBeenCalledTimes(0)
      expect(service2Start).toHaveBeenCalledTimes(1)
    })
  })

  it('start calls start on the service', () => {
    const mockStart = jest.fn()
    const mockService = createMockService({ start: mockStart })
    const containerService = new ContainerService([mockService])
    expect(mockStart).toHaveBeenCalledTimes(0)

    containerService.start()
    expect(mockStart).toHaveBeenCalledTimes(1)
  })

  it('maximize calls maximize on the service', () => {
    const mockMaximize = jest.fn()
    const mockService = createMockService({ maximize: mockMaximize })
    const containerService = new ContainerService([mockService])
    expect(mockMaximize).toHaveBeenCalledTimes(0)

    containerService.maximize()
    expect(mockMaximize).toHaveBeenCalledTimes(1)
  })

  it('minimize calls maximize on the service', () => {
    const mockMinimize = jest.fn()
    const mockService = createMockService({ minimize: mockMinimize })
    const containerService = new ContainerService([mockService])
    expect(mockMinimize).toHaveBeenCalledTimes(0)

    containerService.minimize()
    expect(mockMinimize).toHaveBeenCalledTimes(1)
  })
})