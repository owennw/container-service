import { strategies} from '../container-strategies'
import { ContainerService } from '../container-service'

import { containerService } from '../index'

describe('containerService', () => {
  it('is constructed with the strategies', () => {
    expect(containerService).toEqual(new ContainerService(strategies))
  })
})