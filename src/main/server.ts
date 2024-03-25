import env from './config/env'
import { MongoHelper } from '../utils/infra/db/mongodb/helpers/mongo-helper'

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(env.port, () => { console.log(`server running on port http://localhost:${env.port}`) })
  })
  .catch(console.error)
