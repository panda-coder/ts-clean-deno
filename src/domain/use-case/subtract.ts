import { SubtractDTO } from '@/domain/dtos/index.ts'

export interface Subtract {
  calculate(params: Subtract.Params): Subtract.Result
}

export namespace Subtract {
  export type Params = SubtractDTO
  export type Result = number
}
