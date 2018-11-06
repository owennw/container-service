import { IContainerStrategy } from './container-strategies'

interface IContainerService {
  start(): void
  maximize(): void
}

class ContainerService implements IContainerService {
  private readonly strategy: IContainerStrategy

  constructor(strategies: IContainerStrategy[]) {
    this.strategy = strategies.find(s => s.applies())
  }

  public start() {
    this.strategy.start()
  }

  public maximize() {
    this.strategy.maximize()
  }
}

export { ContainerService, IContainerService }