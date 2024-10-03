import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') { this._amount = amount; } else { throw new TypeError('Amount must be a number'); }
    if (currency instanceof Currency) { this._currency = currency; } else { throw new TypeError('Currency must be an instance of the Currency class'); }
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value === 'number') { this._amount = value; } else { throw new TypeError('Amount must be a number'); }
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (value instanceof Currency) { this._currency = value; } else { throw new TypeError('Currency must be an instance of the Currency class'); }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
  if (typeof amount != 'number' || typeof conversionRate != 'number') {
  throw new TypeError('Both amount and conversionRate must be numbers');
  }
  return (amount * conversionRate);
  }
}
