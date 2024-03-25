export default {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://localhost:27017/clean-arch-ts',
  port: process.env.PORT ?? 5050
}
