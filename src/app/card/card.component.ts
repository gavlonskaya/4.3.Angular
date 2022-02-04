import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/model/card.model';
import { BasketService } from 'src/app/service/basket.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
  }
  addToCart(){
    this.basketService.moveToCart(this.card);
  }
}