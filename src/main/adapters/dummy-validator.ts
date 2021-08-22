import { IValidator } from '@/presentation/contracts/mod.ts'

export class DummyValidator implements IValidator {
  validate(_data: any): Promise<boolean> {
    return Promise.resolve(true)
  }
}
