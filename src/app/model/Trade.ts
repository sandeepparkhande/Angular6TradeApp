export class Trade {
  ticker: string;
  quantity: number;
  price: number;
  total: number;
  date: Date;
  sensex: String;

  constructor(ticker: string, quantity: number, price: number, total: number) {
    this.ticker = ticker;
    this.quantity = quantity;
    this.price = price;
    this.total = total;
    this.date = new Date();
  }
}
