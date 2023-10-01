import { FoodService } from './../../services/food.service';
import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs';
import { Category } from 'src/app/models/categories.model';
import { Food } from 'src/app/models/food.model';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss'],
})
export class menuPage implements OnInit {
  categories: Category[] = [];
  foods: Food[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.getCategories();
    this.foods = this.foodService.getFoods();
  }

  getCategories() {
    this.categories = [
      {
        id: 1,
        label: 'All',
        image: 'assets/icon/all.svg',
        active: true,
      },
      {
        id: 2,
        label: 'Burgers',
        image: 'assets/icon/burger.svg',
        active: false,
      },
      {
        id: 3,
        label: 'Dishes',
        image: 'assets/icon/dish.svg',
        active: false,
      },
      {
        id: 4,
        label: 'Sushi',
        image: 'assets/icon/sushi.svg',
        active: false,
      },
    ];
  }

  setActiveCategory(id: number) {
    this.categories.map((el) => {
      if (el.id === id) el.active = true;
      else el.active = false;
    });
  }
}
