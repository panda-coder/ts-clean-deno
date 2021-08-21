import { env } from './index.ts'
import { appFactory } from '@/main/factories/index.ts'

const Application = () => {

  appFactory[env.FRAMEWORK]()

}

export {
  Application
}
