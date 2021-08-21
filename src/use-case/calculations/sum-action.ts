import { Sum } from '@/domain/use-case/index.ts'

export class SumAction implements Sum {
  calculate(params: Sum.Params): Sum.Result {
    return params.x + params.y
  }
}
