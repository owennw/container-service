import { IContainerService } from './container-service'

import { openFinService } from './openfin-service'
import { browserService } from './browser-service'

const services: IContainerService[] = [
  openFinService,
  browserService,
]

export { services }