import { OpenFinService } from './openfin-service'
import { getOpenFin } from './fin'

const openFinService = new OpenFinService(getOpenFin())

export { openFinService }