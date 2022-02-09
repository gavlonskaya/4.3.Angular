import {Component} from '@angular/core';
import { BasketService } from '../service/basket.service';
@Component({
 selector:'app-menu',
 templateUrl: './menu.component.html',
 styleUrls:['./menu.component.css']
})
export class MenuComponent{
    constructor(public basketService: BasketService){
        
    }
}
