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
import { CartService } from 'src/app/services/cartService';
import { FavoriteFoodService } from 'src/app/services/favoriteFood.service';
import { ToastService } from 'src/app/services/toastService';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
})
export class FoodCardComponent implements OnInit, OnChanges {
  @Input() item: Food;
  noProduct: boolean = false;

  constructor(
    public favoriteFoodService: FavoriteFoodService,
    private router: Router,
    private cartService: CartService,
    private toastService: ToastService
  ) {}

  ngOnInit() {}

  addToFavorite(food: Food) {
    this.favoriteFoodService.addFavorite(food);
  }

  addToCart(event: Event) {
    event.stopPropagation();
    this.cartService.addToCart(this.item);
    this.toastService.showToast(`${this.item.title} added to cart!`, 'top');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.item) this.noProduct = true;
  }

  openDetail() {
    this.router.navigate(['/tabs/menu', this.item.id]);
  }
}
