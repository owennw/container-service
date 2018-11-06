import { IContainerStrategy } from './container-strategy'

import { openFinStrategy } from './openfin-strategy'
import { browserStrategy } from './browser-strategy'

const strategies: IContainerStrategy[] = [
  openFinStrategy,
  browserStrategy,
]

export { strategies }