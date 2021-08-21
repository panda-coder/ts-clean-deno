import { adaptRoute } from '@/main/adapters/opine-route-adapter.ts'
import { makeSumController } from '@/main/factories/controllers/index.ts'


export default (router: any): void => {
  router.post("/sum", adaptRoute(makeSumController()))
}
