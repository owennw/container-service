import { IContainerService } from '../container-service'

interface IContainerStrategy extends IContainerService {
  applies(): boolean
}

export { IContainerStrategy }