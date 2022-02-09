import { Component } from '@angular/core';
import { Card } from "src/app/model/card.model";
import { CardService } from "src/app/service/card.service";
import { BasketService } from './service/basket.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Card[];
  constructor(protected cardService: CardService,
    public basketService: BasketService) {
    this.products = cardService.getCards();
  }
}