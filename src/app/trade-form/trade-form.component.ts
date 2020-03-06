import { Component, OnInit } from "@angular/core";
import { Trade } from "./../model/Trade";
import { TradeService } from "./../trade.service";

@Component({
  selector: "app-trade-form",
  templateUrl: "./trade-form.component.html",
  styleUrls: ["./trade-form.component.scss"]
})
export class TradeFormComponent implements OnInit {
  constructor(private tradeService: TradeService) {}

  trade: Trade;

  ngOnInit() {
    this.trade = new Trade("", 0.0, 0.0, 0.0);
  }

  addTrade() {
    console.log(" Trade is Added ", this.trade);
    this.tradeService.addTradeService(this.trade);
  }
  clearTrade() {
    this.trade = new Trade("", 0.0, 0.0, 0.0);
  }

  calculateTotal() {
    if (!Number.isNaN(this.trade.quantity) && !Number.isNaN(this.trade.price)) {
      console.log(this.trade);
      this.trade.total = this.trade.quantity * this.trade.price;
    }
  }
}
