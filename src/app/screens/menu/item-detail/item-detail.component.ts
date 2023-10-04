import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit, OnDestroy {
  item: Food;
  itemSubs: Subscription;

  hearthPathActive = '../../../../assets/icon/active-heart-white.svg';
  hearthPathNotActive =
    '../../../../assets/icon/not-active-heart-white-bordered.svg';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private foodService: FoodService
  ) {}

  ngOnInit() {
    this.getItem();
  }

  getItem() {
    this.itemSubs = this.route.params.subscribe((el) => {
      const itemRes = this.foodService.getFoodById(+el['id']);

      if (itemRes) this.item = itemRes;
    });
  }

  goBack() {
    this.router.navigate(['/tabs/menu']);
  }

  ngOnDestroy(): void {
    this.itemSubs.unsubscribe();
  }
}
