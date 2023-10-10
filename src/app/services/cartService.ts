import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<{ amount: number; product: Food }[]>([
    {
      amount: 0,
      product: {
        id: 8,
        title: 'Shrimp Scampi',
        price: 14.99,
        image: '../../../assets/foods/Classic Cheeseburger.jpg',
        description:
          "Our Shrimp Scampi is a seafood lover's paradise. Succulent shrimp are sautéed to perfection in a garlic and butter sauce, then elevated with a touch of white wine. This dish is a gourmet experience that will leave you craving more.",
        category: 'Dishes',
        favorite: false,
        preparationTime: 20, // Example preparation time in minutes
        rating: 4.7, // Example rating out of 5,
      },
    },
  ]);

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

  increase(foodItem: Food) {
    const currentItems = this.cartItems.value;
    const existingItemIndex = currentItems.findIndex(
      (item) => item.product.id === foodItem.id
    );

    if (existingItemIndex !== -1) {
      // If the item exists, increase the amount
      currentItems[existingItemIndex].amount += 1;
      this.cartItems.next(currentItems);
    }
  }

  decrease(foodItem: Food) {
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
}
