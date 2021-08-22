import { env } from './mod.ts'
import { appFactory } from '@/main/factories/mod.ts'

const Application = () => {

  appFactory[env.FRAMEWORK]()

}

export {
  Application
}
