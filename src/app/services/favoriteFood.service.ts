import { Injectable, Pipe } from '@angular/core';
import { Food } from '../models/food.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteFoodService {
  constructor() {}
  imagePath = '../../../assets/foods/';
  favoriteFoods = new BehaviorSubject<Food[]>([]);

  addFavorite(item: Food) {
    const currentValue = this.favoriteFoods.value;
    const updatedValue = [item, ...currentValue];
    this.favoriteFoods.next(updatedValue);
  }
  removeFavorite(item: Food) {
    const currentValue = this.favoriteFoods.value.filter(
      (el) => el.id !== item.id
    );
    this.favoriteFoods.next(currentValue);
  }

  getFavorites(): Food[] {
    return this.favoriteFoods.value;
  }

  checkFoodInFavorites(id: number) {
    return this.favoriteFoods.value.find((el) => el.id === id);
  }
}
