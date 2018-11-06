import { IContainerStrategy } from './container-strategy'

class BrowserStrategy implements IContainerStrategy {
  public applies() {
    return true
  }

  public start() {
    // No-op
  }

  public maximize() {
    // No-op
  }

  public minimize() {
    // No-op
  }
}

const browserStrategy = new BrowserStrategy()

export { browserStrategy }