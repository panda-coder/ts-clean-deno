import { DivideDTO } from '@/domain/dtos/mod.ts'

export interface Divide {
  calculate(params: Divide.Params): Divide.Result
}

export namespace Divide {
  export type Params = DivideDTO
  export type Result = number
}
