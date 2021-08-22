import { HttpRequest, HttpResponse } from './mod.ts'

export interface HttpController {
  handle: (request: HttpRequest) => Promise<HttpResponse>
}
