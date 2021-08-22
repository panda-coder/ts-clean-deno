

import { v1 } from '../routes/mod.ts'

const setupRoutes = (app: any) => {
    app.use('/v1', v1)
}

export {
  setupRoutes
}
