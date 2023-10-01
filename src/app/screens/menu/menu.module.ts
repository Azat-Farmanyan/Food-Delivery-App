import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { menuPage } from './menu.page';

import { menuPageRoutingModule } from './menu-routing.module';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { CategoryItemModule } from 'src/app/components/category-item/category-item.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    menuPageRoutingModule,
    SearchbarModule,
    CategoryItemModule,
  ],
  declarations: [menuPage],
})
export class menuPageModule {}
