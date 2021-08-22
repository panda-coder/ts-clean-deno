import { DivideController } from '@/presentation/controllers/mod.ts'
import { DivideAction } from '@/use-case/calculations/mod.ts'

import { DummyValidator } from '@/main/adapters/dummy-validator.ts'


export const makeDivideController = () => {
  return new DivideController(
    new DivideAction(),
    new DummyValidator()
  )
}
