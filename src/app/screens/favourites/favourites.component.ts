import { Food } from 'src/app/models/food.model';
import { FavoriteFoodService } from './../../services/favoriteFood.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit, OnDestroy {
  favoriteFoods: Food[] = [];
  foodsSubs: Subscription;

  constructor(private favoriteFoodService: FavoriteFoodService) {}

  ngOnInit() {
    // this.favoriteFoods = this.favoriteFoodService.getFavorites();
    this.getFavorites();
  }

  getFavorites() {
    this.foodsSubs = this.favoriteFoodService.favoriteFoods.subscribe(
      (foods) => {
        // console.log(foods);

        this.favoriteFoods = foods;
      }
    );
  }
  ngOnDestroy(): void {
    this.foodsSubs.unsubscribe();
  }
}
