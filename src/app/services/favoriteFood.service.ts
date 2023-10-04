import { Injectable, Pipe } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class FavoriteFoodService {
  constructor() {}
  imagePath = '../../../assets/foods/';
  favoriteFoods: Food[] = [];

  addFavorite(item: Food) {
    this.favoriteFoods.push(item);
  }
  removeFavorite(item: Food) {
    this.favoriteFoods = this.favoriteFoods.filter((el) => el.id !== item.id);
  }

  getFavorites(): Food[] {
    return this.favoriteFoods;
  }

  checkFoodInFavorites(id: number) {
    return this.favoriteFoods.find((el) => el.id === id);
  }
}
