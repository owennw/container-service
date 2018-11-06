import { services} from '../container-services'
import { ContainerService } from '../container-service'

import { containerService } from '../index'

describe('containerService', () => {
  it('is constructed with the services', () => {
    expect(containerService).toEqual(new ContainerService(services))
  })
})