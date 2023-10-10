import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { menuPageRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { FoodCardInCartModule } from 'src/app/components/food-card-in-cart/food-card-in-cart';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    menuPageRoutingModule,
    FoodCardInCartModule,
  ],
  declarations: [CartComponent],
})
export class cartPageModule {}
