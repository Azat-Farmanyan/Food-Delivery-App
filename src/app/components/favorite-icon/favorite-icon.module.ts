import { EventEmitter, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FavoriteIconComponent } from './favorite-icon.component';

@NgModule({
  declarations: [FavoriteIconComponent],
  imports: [CommonModule, IonicModule],
  exports: [FavoriteIconComponent],
})
export class FavoriteIconModule {}
