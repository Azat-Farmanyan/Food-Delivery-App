import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { menuPageRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, menuPageRoutingModule],
  declarations: [CartComponent],
})
export class cartPageModule {}
