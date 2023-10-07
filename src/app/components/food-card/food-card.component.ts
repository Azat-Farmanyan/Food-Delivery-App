import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Food } from 'src/app/models/food.model';
import { FavoriteFoodService } from 'src/app/services/favoriteFood.service';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
})
export class FoodCardComponent implements OnInit, OnChanges {
  @Input() item: Food;
  noProduct: boolean = false;

  constructor(
    private toastController: ToastController,
    public favoriteFoodService: FavoriteFoodService,
    private router: Router
  ) {}

  ngOnInit() {}

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'The product is added to the basket successfully',
      duration: 2000,
      position: position,
    });

    await toast.present();
  }

  addToFavorite(food: Food) {
    this.favoriteFoodService.addFavorite(food);
    this.presentToast('top');
  }

  addToCart(event: Event) {
    event.stopPropagation();
    console.log('add to cart');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.item) this.noProduct = true;
  }

  openDetail() {
    this.router.navigate(['/tabs/menu', this.item.id]);
  }
}
