import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Food } from 'src/app/models/food.model';
import { CartService } from 'src/app/services/cartService';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  getCartItemsSubs: Subscription;
  foodInCart: { amount: number; product: Food }[] = [];

  constructor(public cartService: CartService) {}

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    this.getCartItemsSubs = this.cartService.getCartItems().subscribe((res) => {
      this.foodInCart = res;
      console.log(this.foodInCart);
    });
  }

  ngOnDestroy(): void {
    if (this.getCartItemsSubs) this.getCartItemsSubs.unsubscribe();
  }
}
