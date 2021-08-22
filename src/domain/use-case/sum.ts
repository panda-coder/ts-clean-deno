import { SumDTO } from '@/domain/dtos/mod.ts'

export interface Sum {
  calculate(params: Sum.Params): Sum.Result
}

export namespace Sum {
  export type Params = SumDTO
  export type Result = number
}
