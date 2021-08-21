import { SumController } from '@/presentation/controllers/index.ts'
import { SumAction } from '@/use-case/calculations/index.ts'

import { DummyValidator } from '@/main/adapters/dummy-validator.ts'


export const makeSumController = () => {
  return new SumController(
    new SumAction(),
    new DummyValidator()
  )
}
