import { adaptRoute } from '@/main/adapters/opine-route-adapter.ts'
import { makeDivideController } from '@/main/factories/controllers/mod.ts'


export default (router: any): void => {
  router.post("/divide", adaptRoute(makeDivideController()))
}
