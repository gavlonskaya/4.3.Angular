import { Component, OnInit } from '@angular/core';
import { cardMock } from 'src/app/mock/card.mock';
import { Card } from 'src/app/model/card.model';
import { BasketService } from 'src/app/service/basket.service';

@Component({
  selector: 'app-cart',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  cards:Card[] = cardMock;
  cartData: Card[]= [];
  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
  this.cartData = this.basketService.getCartData();
  }

}