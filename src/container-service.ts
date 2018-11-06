import { IContainerStrategy } from './container-strategies'

interface IContainerService {
  start(): void
  maximize(): void
  minimize(): void
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

  public minimize() {
    this.strategy.minimize()
  }
}

export { ContainerService, IContainerService }