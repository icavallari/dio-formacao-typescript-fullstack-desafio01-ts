export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  setBalance = (value: number): void => {
    this.balance += value
  }

  deposit = (value : number): void => {
    if(this.validateStatus()){

      this.balance += value
      console.log(`Voce depositou: ${value}`)
      this.getBalance()
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus()){

      if(this.balance >= value){
        this.balance -= value
        console.log(`Voce sacou: ${value}`)
        this.getBalance()

      } else {
        throw new Error(`Não foi possível realizar o saque. Seu saldo é de apenas ${this.balance}`)
      }

    }    
  }

  getBalance = (): void => {
    console.log(`Saldo atual: ${this.balance}`)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
