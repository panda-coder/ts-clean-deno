import { SubtractController } from '@/presentation/controllers/mod.ts'
import { SubtractAction } from '@/use-case/calculations/mod.ts'

import { DummyValidator } from '@/main/adapters/dummy-validator.ts'


export const makeSubtractController = () => {
  return new SubtractController(
    new SubtractAction(),
    new DummyValidator()
  )
}
