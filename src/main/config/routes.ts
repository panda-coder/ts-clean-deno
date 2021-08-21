

import { v1 } from '../routes/index.ts'

const setupRoutes = (app: any) => {
    app.use('/v1', v1)
}

export {
  setupRoutes
}
