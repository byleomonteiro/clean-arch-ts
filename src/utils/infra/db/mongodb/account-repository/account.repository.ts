import { type AddAccountRepository } from '../../../../../data/protocols/add-account-repository.protocol'
import { type AccountModel } from '../../../../../domain/models/account.model'
import { type AddAccountModel } from '../../../../../domain/usecases/add-account.protocol'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')

    const { insertedId } = await accountCollection.insertOne(accountData)

    const account = await accountCollection.findOne(insertedId)

    return await Promise.resolve({
      id: String(account?._id),
      name: account?.name,
      email: account?.email,
      password: account?.password
    })
  }
}
