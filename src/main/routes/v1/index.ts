import { Router } from "https://deno.land/x/opine@1.7.2/mod.ts";

import sum from './sum.ts'
import subtract from './subtract.ts'
import multiply from './multiply.ts'
import divide from './divide.ts'

const router = Router();

sum(router)
subtract(router)
multiply(router)
divide(router)

export default router
