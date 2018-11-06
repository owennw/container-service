import { ContainerService } from '../container-service'
import { IContainerService } from '../container-services'

const createMockService = (applies: boolean, start: () => void): IContainerService => ({
  applies: () => applies,
  start,
})

describe('Container Service', () => {
  const service1Applies = false
  const service1Start = jest.fn()
  const mockService1 = createMockService(service1Applies, service1Start)

  const service2Applies = true
  const service2Start = jest.fn()
  const mockService2 = createMockService(service2Applies, service2Start)

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

  it('start calls start on the service', () => {
    const containerService = new ContainerService([mockService2])
    expect(service2Start).toHaveBeenCalledTimes(0)

    containerService.start()
    expect(service2Start).toHaveBeenCalledTimes(1)
  })
})