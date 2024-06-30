import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency');
    }
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency');
    }
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return this._amount * conversionRate;
  }
}
