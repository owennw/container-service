import IContainerService from './container-service'

import BrowserService from './browser-service'
import OpenFinService from './openfin-service'

const services: IContainerService[] = [
  OpenFinService,
  BrowserService,
]

export default services