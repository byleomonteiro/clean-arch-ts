import { MongoClient, type Collection } from 'mongodb'

export const MongoHelper = {
  client: MongoClient,
  uri: null as unknown as string,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri)
  },
  async disconnect (): Promise<void> {
    if (this.client) {
      await this.client.close()
    }
    this.client = null
  },
  async getCollection (name: string): Promise<Collection> {
    if (!this.client?.isConnected) {
      await this.connect(this.uri)
    }
    return this.client.db().collection(name)
  }
}
