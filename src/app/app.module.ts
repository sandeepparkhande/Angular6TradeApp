import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TradeFormComponent } from "./trade-form/trade-form.component";
import { TradeDisplayComponent } from "./trade-display/trade-display.component";
import { TradeService } from "./trade.service";
@NgModule({
  declarations: [AppComponent, TradeFormComponent, TradeDisplayComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [TradeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
