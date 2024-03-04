import { DioAccount } from "./DioAccount"

export class StudentAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (value : number): void => {
    if(this.validateStatus()){
      this.setBalance(value + 10)

      console.log(`Voce depositou: ${value}`)
      this.getBalance()
    }
  }

}