import { ok, badRequest } from "@/presentation/helpers/index.ts"
import { HttpRequest, HttpResponse, HttpController, IValidator } from "@/presentation/contracts/index.ts"

import { Subtract } from '@/domain/use-case/index.ts'

export class SubtractController implements HttpController {
  constructor(private readonly subtract: Subtract, private readonly validator: IValidator) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    
    if (await this.validator.validate(httpRequest.body)) {
      const value = await this.subtract.calculate(httpRequest.body)

      return ok({"value": value})
    }

    return badRequest(new Error('Invalid data'))
  }
}
