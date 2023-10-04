import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';
import { FavoriteFoodService } from '../../../services/favoriteFood.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit, OnDestroy {
  item: Food;
  itemSubs: Subscription;
  isFavorite = false;

  hearthPathActive = '../../../../assets/icon/active-heart-white.svg';
  hearthPathNotActive =
    '../../../../assets/icon/not-active-heart-white-bordered.svg';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private foodService: FoodService,
    private favoriteService: FavoriteFoodService
  ) {}

  ngOnInit() {
    this.getItem();
  }

  getItem() {
    this.itemSubs = this.route.params.subscribe((el) => {
      const itemId = +el['id'];
      const itemRes = this.foodService.getFoodById(itemId);
      console.log(
        'isFavorite: ',
        this.favoriteService.checkFoodInFavorites(itemId)
      );

      if (this.favoriteService.checkFoodInFavorites(itemId)) {
        this.isFavorite = true;
      } else {
        this.isFavorite = false;
      }

      if (itemRes) this.item = itemRes;
    });
  }

  goBack() {
    this.router.navigate(['/tabs/menu']);
  }

  addToFavorites() {
    this.favoriteService.addFavorite(this.item);
    this.isFavorite = !this.isFavorite;
  }
  removeFromFavorites() {
    this.favoriteService.removeFavorite(this.item);
    this.isFavorite = !this.isFavorite;
  }

  ngOnDestroy(): void {
    this.itemSubs.unsubscribe();
  }
}
