import { IContainerStrategy } from '../container-strategy'

const getCurrentWindow = fin => fin.desktop.Window.getCurrent()

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
    getCurrentWindow(this.fin).maximize()
  }

  public minimize() {
    getCurrentWindow(this.fin).minimize()
  }
}

export { OpenFinStrategy }