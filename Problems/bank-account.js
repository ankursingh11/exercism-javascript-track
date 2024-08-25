// https://exercism.org/tracks/javascript/exercises/bank-account/edit

//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.amount = 0;
    this.isAccountOpen = false;
  }

  open() {
    if (this.isAccountOpen) throw new ValueError();
    this.isAccountOpen = true;
  }

  close() {
    if (!this.isAccountOpen) throw new ValueError();
    this.isAccountOpen = false;
    this.amount = 0;
  }

  deposit(depositAmount) {
    if (!this.isAccountOpen) throw new ValueError();
    if (depositAmount < 0) throw new ValueError();
    this.amount += depositAmount;
  }

  withdraw(withdrawAmount) {
    if (!this.isAccountOpen) throw new ValueError();
    if (withdrawAmount > this.amount || withdrawAmount < 0)
      throw new ValueError();
    this.amount -= withdrawAmount;
  }

  get balance() {
    if (!this.isAccountOpen) throw new ValueError();
    return this.amount;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
