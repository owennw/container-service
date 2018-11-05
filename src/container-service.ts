import { IContainerService } from './services'

class ContainerService {
  private service: IContainerService

  constructor(services: IContainerService[]) {
    this.service = services.find(s => s.applies())
  }

  public start() {
    this.service.start()
  }
}

export default ContainerService