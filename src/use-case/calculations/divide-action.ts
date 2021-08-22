import { Divide } from '@/domain/use-case/mod.ts'

export class DivideAction implements Divide {
  calculate(params: Divide.Params): Divide.Result {
    return params.x / params.y
  }
}
