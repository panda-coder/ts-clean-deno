import { ok, badRequest } from "@/presentation/helpers/index.ts"
import { HttpRequest, HttpResponse, HttpController, IValidator } from "@/presentation/contracts/index.ts"

import { Multiply } from '@/domain/use-case/index.ts'

export class MultiplyController implements HttpController {
  constructor(private readonly multiply: Multiply, private readonly validator: IValidator) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    
    if (await this.validator.validate(httpRequest.body)) {
      const value = await this.multiply.calculate(httpRequest.body)

      return ok({"value": value})
    }

    return badRequest(new Error('Invalid data'))
  }
}
