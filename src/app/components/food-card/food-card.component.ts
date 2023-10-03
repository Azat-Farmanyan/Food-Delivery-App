import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
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
  @Output() onAddToFavorite = new EventEmitter();
  noProduct: boolean = false;

  activeHeartPath = '../../../assets/icon/active-heart.svg';
  notActiveHeartPath = '../../../assets/icon/not-active-heart.svg';
  constructor(
    private toastController: ToastController,
    public favoriteFoodService: FavoriteFoodService
  ) {}

  ngOnInit() {}

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  addToFavorite(food: Food) {
    this.favoriteFoodService.addFavorite(food);
    this.presentToast('top');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.item) this.noProduct = true;

    // console.log(this.noProduct);

    // console.log(this.item);
  }
}
