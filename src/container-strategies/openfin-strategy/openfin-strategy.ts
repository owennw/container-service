import { IContainerStrategy } from '../container-strategy'

class OpenFinStrategy implements IContainerStrategy {
  private readonly fin: any

  constructor(fin: any) {
    this.fin = fin
  }

  public applies() {
    return !!this.fin
  }

  public start() {
    // No-op
  }

  public maximize() {
    this.fin.desktop.Window.getCurrent().maximize()
  }
}

export { OpenFinStrategy }