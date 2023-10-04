import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { menuPage } from './menu.page';

import { menuPageRoutingModule } from './menu-routing.module';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { CategoryItemModule } from 'src/app/components/category-item/category-item.module';
import { FoodCardModule } from 'src/app/components/food-card/food-card.module';
import { ProductFilterPipe } from 'src/app/pipes/product-filter.pipe';
import { ItemDetailComponent } from './item-detail/item-detail.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    menuPageRoutingModule,
    SearchbarModule,
    CategoryItemModule,
    FoodCardModule,
  ],
  declarations: [menuPage, ProductFilterPipe, ItemDetailComponent],
})
export class menuPageModule {}
