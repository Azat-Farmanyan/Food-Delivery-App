import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { menuPageRoutingModule } from './favourites-routing.module';
import { FavouritesComponent } from './favourites.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, menuPageRoutingModule],
  declarations: [FavouritesComponent],
})
export class favouritesPageModule {}
