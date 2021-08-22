import { ok, badRequest } from "@/presentation/helpers/index.ts"
import { HttpRequest, HttpResponse, HttpController, IValidator } from "@/presentation/contracts/mod.ts"

import { Sum } from '@/domain/use-case/mod.ts'

export class SumController implements HttpController {
  constructor(private readonly sum: Sum, private readonly validator: IValidator) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    
    if (await this.validator.validate(httpRequest.body)) {
      const value = await this.sum.calculate(httpRequest.body)
      return ok({"value": value})
    }

    return badRequest(new Error('Invalid data'))
  }
}
