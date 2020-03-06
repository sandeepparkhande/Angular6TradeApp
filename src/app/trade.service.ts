import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Trade } from "./model/Trade";
@Injectable({
  providedIn: "root"
})
export class TradeService {
  constructor() {}

  messageResource = new BehaviorSubject(Trade);
  messageResouceObersevable = this.messageResource.asObservable();

  addTradeService(trade: any) {
    if (trade !== null) {
      this.messageResource.next(trade);
    }
  }
}
