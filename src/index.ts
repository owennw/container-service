import { strategies } from './container-strategies'
import { ContainerService } from './container-service'

const containerService = new ContainerService(strategies)

export { containerService }