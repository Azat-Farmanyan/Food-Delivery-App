import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FoodCardInCartComponent } from './food-card-in-cart.component';

@NgModule({
  declarations: [FoodCardInCartComponent],
  imports: [CommonModule, IonicModule],
  exports: [FoodCardInCartComponent],
})
export class FoodCardInCartModule {}
