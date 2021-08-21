import { adaptRoute } from '@/main/adapters/opine-route-adapter.ts'
import { makeMultiplyController } from '@/main/factories/controllers/index.ts'


export default (router: any): void => {
  router.post("/multiply", adaptRoute(makeMultiplyController()))
}
