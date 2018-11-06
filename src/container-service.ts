import { IContainerStrategy } from './container-strategies'

class ContainerService {
  private readonly strategy: IContainerStrategy

  constructor(strategies: IContainerStrategy[]) {
    this.strategy = strategies.find(s => s.applies())
  }

  public start() {
    this.strategy.start()
  }
}

export { ContainerService }