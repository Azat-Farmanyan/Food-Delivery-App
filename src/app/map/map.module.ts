import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { menuPageRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, menuPageRoutingModule],
  declarations: [MapComponent],
})
export class menuPageModule {}
