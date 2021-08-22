import { MultiplyController } from '@/presentation/controllers/mod.ts'
import { MultiplyAction } from '@/use-case/calculations/mod.ts'

import { DummyValidator } from '@/main/adapters/dummy-validator.ts'


export const makeMultiplyController = () => {
  return new MultiplyController(
    new MultiplyAction(),
    new DummyValidator()
  )
}
