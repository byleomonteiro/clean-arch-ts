import { DbAddAccount } from '../../data/usecases/add-account/db-add-account.usecase'
import { SignUpController } from '../../presentation/controllers/signup/signup.controller'
import { type Controller } from '../../presentation/protocols'
import { EmailValidatorAdapter } from '../../utils/email-validator.adapter'
import { BcryptAdapter } from '../../utils/infra/cryptography/bcrypt.adapter'
import { AccountMongoRepository } from '../../utils/infra/db/mongodb/account-repository/account.repository'
import { LogControllerDecorator } from '../decorators/log'

export const makeSignUpController = (): Controller => {
  const salt = 12
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAddAccount(
    bcryptAdapter,
    accountMongoRepository
  )

  const signUpController = new SignUpController(
    emailValidatorAdapter,
    dbAddAccount
  )

  return new LogControllerDecorator(signUpController)
}
