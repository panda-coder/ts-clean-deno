import { MultiplyController } from '@/presentation/controllers/index.ts'
import { MultiplyAction } from '@/use-case/calculations/index.ts'

import { DummyValidator } from '@/main/adapters/dummy-validator.ts'


export const makeMultiplyController = () => {
  return new MultiplyController(
    new MultiplyAction(),
    new DummyValidator()
  )
}
