import { Food } from 'src/app/models/food.model';
import { FavoriteFoodService } from './../../services/favoriteFood.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  favoriteFoods: Food[] = [];

  constructor(private favoriteFoodService: FavoriteFoodService) {}

  ngOnInit() {
    this.favoriteFoods = this.favoriteFoodService.getFavorites();
  }
}
