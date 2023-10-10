import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<{ amount: number; product: Food }[]>(
    []
  );
  cartItems$ = this.cartItems.asObservable();

  addToCart(foodItem: Food) {
    const currentItems = this.cartItems.value;
    const updatedItems = [...currentItems];

    const existingItemIndex = updatedItems.findIndex(
      (item) => item.product.id === foodItem.id
    );

    if (existingItemIndex !== -1) {
      // If the item already exists, increment the amount
      updatedItems[existingItemIndex].amount += 1;
    } else {
      // If the item is not in the cart, add it with amount 1
      updatedItems.push({ amount: 1, product: foodItem });
    }

    this.cartItems.next(updatedItems);
  }

  deleteItem(foodItem: Food) {
    const currentItems = this.cartItems.value;
    const existingItemIndex = currentItems.findIndex(
      (item) => item.product.id === foodItem.id
    );

    if (existingItemIndex !== -1) {
      // If the item exists, decrease the amount or remove it if the amount is 1
      if (currentItems[existingItemIndex].amount > 1) {
        currentItems[existingItemIndex].amount -= 1;
      } else {
        currentItems.splice(existingItemIndex, 1);
      }

      this.cartItems.next(currentItems);
    }
  }

  getCartItems(): Observable<{ amount: number; product: Food }[]> {
    return this.cartItems$;
  }
}
