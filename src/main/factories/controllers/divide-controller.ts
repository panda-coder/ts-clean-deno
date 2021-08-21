import { DivideController } from '@/presentation/controllers/index.ts'
import { DivideAction } from '@/use-case/calculations/index.ts'

import { DummyValidator } from '@/main/adapters/dummy-validator.ts'


export const makeDivideController = () => {
  return new DivideController(
    new DivideAction(),
    new DummyValidator()
  )
}
