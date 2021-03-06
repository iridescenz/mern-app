import app from './server.js'
import mongodb from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()
const client = mongodb.MongoClient

const port = process.env.PORT || 8000

client.connect(
  process.env.RESTREVIEWS_DB_URI,
   {
    poolSize: 500,
    wtimeout: 2500,
    useNewUrlParser: true
  }
)
.catch(err => {
  console.error(err.stack)
  process.exit(1)
})
.then(async client => {
  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
});