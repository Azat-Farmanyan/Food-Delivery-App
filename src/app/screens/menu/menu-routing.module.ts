import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { menuPage } from './menu.page';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const routes: Routes = [
  {
    path: '',
    component: menuPage,
  },
  {
    path: ':id',
    component: ItemDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class menuPageRoutingModule {}
