import { SumController } from '@/presentation/controllers/mod.ts'
import { SumAction } from '@/use-case/calculations/mod.ts'

import { DummyValidator } from '@/main/adapters/dummy-validator.ts'


export const makeSumController = () => {
  return new SumController(
    new SumAction(),
    new DummyValidator()
  )
}
