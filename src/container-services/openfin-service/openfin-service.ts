import IContainerService from '../container-service'

class OpenFinService implements IContainerService {
  private fin: any

  constructor(fin: any) {
    this.fin = fin
  }

  public applies() {
    return !!this.fin
  }

  public start() {
    // No-op
  }
}

export default OpenFinService