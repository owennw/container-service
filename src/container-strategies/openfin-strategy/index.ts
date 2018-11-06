import { OpenFinStrategy } from './openfin-strategy'
import { getOpenFin } from './fin'

const openFinStrategy = new OpenFinStrategy(getOpenFin())

export { openFinStrategy }