import { opine, json } from "opine/mod.ts";
import { setupRoutes } from '@/main/config/mod.ts'

const makeOpine = () => {
  const app = opine()
  app.use(json())

  setupRoutes(app)

  
  app.listen(3000, () => console.log("server has started on http://localhost:3000 🚀"));

  return app
}

const appFactory = {
  opine: makeOpine
}


export {
  makeOpine,
  appFactory
}
