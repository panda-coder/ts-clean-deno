import { HttpRequest, HttpResponse } from './index.ts'

export interface HttpController {
  handle: (request: HttpRequest) => Promise<HttpResponse>
}
