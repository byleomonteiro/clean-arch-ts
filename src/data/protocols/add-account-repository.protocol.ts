import { type AddAccountModel } from '../../domain/usecases/add-account.protocol'
import { type AccountModel } from '../../domain/models/account.model'

export interface AddAccountRepository {
  add: (account: AddAccountModel) => Promise<AccountModel>
}
