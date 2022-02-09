import { Injectable } from "@angular/core";
import { cardMock } from "src/app/mock/card.mock";
import { Card } from "src/app/model/card.model";

@Injectable({
  providedIn: 'root'
})
export class BasketService{
  private toBasket: Card[]=[];

  moveToCart(buyCard: Card): void{
    this.toBasket.push({...buyCard, buy: true});
      
  }
  getCartData(): Card[]{
    return this.toBasket;
  }
}
openBasket():void{
  this.isOpenBasket = true;
}
closeBasket():void{
  this.isOpenBasket = false;
}
showOpenBasket():boolean{
  return this.isOpenBasket;
}