import { HttpController } from '@/presentation/contracts/mod.ts'


const SERVER_ERROR = {
  statusCode: 500,
  body: {error: "Internal Server error"}
}


export const adaptRoute = (controller: HttpController) => {

  return async (req: any, res: any) => {
    try {
      const httpResponse = await controller.handle({body: req.body, params: req.query})
      if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
        res.setStatus(httpResponse.statusCode).json(httpResponse.body)
      } else {
        res.setStatus(httpResponse.statusCode).json({
          error: httpResponse.body.message
        })
      }
    } catch (err) {
      console.log(err)
      res.setStatus(SERVER_ERROR.statusCode).json(SERVER_ERROR.body)
    } 
  }
}
