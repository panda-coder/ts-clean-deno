import { Subtract } from '@/domain/use-case/mod.ts'

export class SubtractAction implements Subtract {
  calculate(params: Subtract.Params): Subtract.Result {
    return params.x - params.y
  }
}
