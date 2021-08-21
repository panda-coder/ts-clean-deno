import { Multiply } from '@/domain/use-case/index.ts'

export class MultiplyAction implements Multiply {
  calculate(params: Multiply.Params): Multiply.Result {
    return params.x * params.y
  }
}
