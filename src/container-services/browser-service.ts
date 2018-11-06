import { IContainerService } from './container-service'

class BrowserService implements IContainerService {
  public applies() {
    return true
  }

  public start() {
    // No-op
  }
}

const browserService = new BrowserService()

export { browserService }