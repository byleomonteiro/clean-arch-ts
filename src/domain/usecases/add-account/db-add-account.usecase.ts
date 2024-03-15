import { type AccountModel } from '../../models/account.model'
import { type AddAccount, type AddAccountModel } from './add-account.protocol'
import { type Encrypter } from '../../../data/protocols/encrypter.protocol'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)
    return await Promise.resolve({
      id: 'valid_id',
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    })
  }
}
