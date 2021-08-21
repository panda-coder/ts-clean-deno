import { adaptRoute } from '@/main/adapters/opine-route-adapter.ts'
import { makeSubtractController } from '@/main/factories/controllers/index.ts'


export default (router: any): void => {
  router.post("/subtract", adaptRoute(makeSubtractController()))
}
