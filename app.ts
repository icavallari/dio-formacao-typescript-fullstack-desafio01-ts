import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { StudentAccount } from './class/StudentAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(10)

console.clear()
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(15)
companyAccount.getLoan(7.5)

console.clear()
const studentAccount: StudentAccount = new StudentAccount('Rodrigo', 36)
studentAccount.deposit(15)