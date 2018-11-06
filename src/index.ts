import { services } from './container-services'
import { ContainerService } from './container-service'

const containerService = new ContainerService(services)

export { containerService }