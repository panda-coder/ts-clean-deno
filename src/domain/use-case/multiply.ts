import { MultiplyDTO } from '@/domain/dtos/mod.ts'

export interface Multiply {
  calculate(params: Multiply.Params): Multiply.Result
}

export namespace Multiply {
  export type Params = MultiplyDTO
  export type Result = number
}
