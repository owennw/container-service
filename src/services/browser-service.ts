import IContainerService from './container-service'

class BrowserService implements IContainerService {
  public applies() {
    return true
  }

  public start() {
    // No-op
  }
}

export default BrowserService