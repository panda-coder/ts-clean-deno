import { SubtractController } from '@/presentation/controllers/index.ts'
import { SubtractAction } from '@/use-case/calculations/index.ts'

import { DummyValidator } from '@/main/adapters/dummy-validator.ts'


export const makeSubtractController = () => {
  return new SubtractController(
    new SubtractAction(),
    new DummyValidator()
  )
}
