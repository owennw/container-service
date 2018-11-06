import { IContainerStrategy } from './container-strategies'

interface IContainerService {
  start(): void
}

class ContainerService implements IContainerService {
  private readonly strategy: IContainerStrategy

  constructor(strategies: IContainerStrategy[]) {
    this.strategy = strategies.find(s => s.applies())
  }

  public start() {
    this.strategy.start()
  }
}

export { ContainerService, IContainerService }