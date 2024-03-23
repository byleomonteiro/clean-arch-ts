import { type AddAccountRepository } from '../../../../../data/protocols/add-account-repository.protocol'
import { type AccountModel } from '../../../../../domain/models/account.model'
import { type AddAccountModel } from '../../../../../domain/usecases/add-account.protocol'

export class AccountMongoRepository implements AddAccountRepository {
  async add (account: AddAccountModel): Promise<AccountModel> {
    return await Promise.resolve({
      id: 'any_id',
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password'
    })
  }
}
