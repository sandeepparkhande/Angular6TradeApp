import { Component, OnInit } from "@angular/core";
import { Trade } from "./../model/Trade";
import { TradeService } from "./../trade.service";

@Component({
  selector: "app-trade-display",
  templateUrl: "./trade-display.component.html",
  styleUrls: ["./trade-display.component.scss"]
})
export class TradeDisplayComponent implements OnInit {
  tradeList: Array<Trade> = [];

  constructor(private tradeService: TradeService) {}

  ngOnInit() {
    this.tradeService.messageResouceObersevable.subscribe(trade => {
      var newTrade = <Trade>(<any>trade);
      if (newTrade.ticker !== undefined) {
        this.tradeList.push(
          new Trade(
            newTrade.ticker,
            newTrade.quantity,
            newTrade.price,
            newTrade.total
          )
        );
      }
    });
  }

  deleteTrade(trade: Trade) {
    this.tradeList = this.tradeList.filter(tradeItem => trade != tradeItem);
  }

  updateTrade(trade: Trade) {
    let itemIndex = this.tradeList.findIndex(
      item => item.ticker == trade.ticker
    );
    this.tradeList[itemIndex] = trade;
  }
}
