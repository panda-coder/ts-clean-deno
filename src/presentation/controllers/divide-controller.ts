import { ok, badRequest } from "@/presentation/helpers/mod.ts"
import { HttpRequest, HttpResponse, HttpController, IValidator } from "@/presentation/contracts/mod.ts"

import { Divide } from '@/domain/use-case/mod.ts'

export class DivideController implements HttpController {
  constructor(private readonly divide: Divide, private readonly validator: IValidator) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    
    if (await this.validator.validate(httpRequest.body)) {
      const value = await this.divide.calculate(httpRequest.body)

      return ok({"value": value})
    }

    return badRequest(new Error('Invalid data'))
  }
}
