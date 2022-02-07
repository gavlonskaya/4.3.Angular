import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import{BasketComponent} from './basket/basket.component'
import { BasketGuard } from './guards/basket.guard';


const routes: Routes = [
  {path: 'basket', component: BasketComponent, canActivate: [BasketGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
