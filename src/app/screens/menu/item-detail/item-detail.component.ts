import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';
import { FavoriteFoodService } from '../../../services/favoriteFood.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';
import { RouterService } from 'src/app/services/routerService';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit, OnDestroy {
  item: Food;
  itemSubs: Subscription;
  routerSubs: Subscription;
  isFavorite = false;

  previousUrl: string;

  hearthPathActive = '../../../../assets/icon/active-heart-white.svg';
  hearthPathNotActive =
    '../../../../assets/icon/not-active-heart-white-bordered.svg';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private foodService: FoodService,
    private favoriteService: FavoriteFoodService,
    private routerService: RouterService
  ) {}

  ngOnInit() {
    this.getItem();
    this.routerSubs = this.routerService.previousPath.subscribe((prevPath) => {
      console.log(prevPath);
      console.log('current url', this.router.url);

      this.previousUrl = prevPath;
    });
  }

  getItem() {
    this.itemSubs = this.route.params.subscribe((el) => {
      const itemId = +el['id'];
      const itemRes = this.foodService.getFoodById(itemId);
      console.log(itemRes);

      if (typeof itemRes === 'undefined') {
        console.log('go back');

        this.goBack();
      }

      if (this.favoriteService.checkFoodInFavorites(itemId)) {
        this.isFavorite = true;
      } else {
        this.isFavorite = false;
      }

      if (itemRes) this.item = itemRes;
    });
  }

  goBack() {
    if (this.previousUrl) this.router.navigate([this.previousUrl]);
    else this.router.navigate(['tabs/menu']);
  }

  toggleFavorite() {
    if (this.isFavorite) {
      this.removeFromFavorites();
    } else {
      this.addToFavorites();
    }
  }

  addToFavorites() {
    this.favoriteService.addFavorite(this.item);
    this.isFavorite = true;
  }

  removeFromFavorites() {
    this.favoriteService.removeFavorite(this.item);
    this.isFavorite = false;
  }

  ngOnDestroy(): void {
    if (this.itemSubs) this.itemSubs.unsubscribe();
    if (this.routerSubs) this.routerSubs.unsubscribe();
  }
}
