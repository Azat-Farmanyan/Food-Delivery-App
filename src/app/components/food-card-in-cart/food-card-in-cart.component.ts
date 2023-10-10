import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Food } from 'src/app/models/food.model';

@Component({
  selector: 'app-food-card-in-cart',
  templateUrl: './food-card-in-cart.component.html',
  styleUrls: ['./food-card-in-cart.component.scss'],
})
export class FoodCardInCartComponent implements OnInit, OnChanges {
  @Input() item: { amount: number; product: Food };

  @Output() onPlus = new EventEmitter();
  @Output() onMinus = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.item);
  }

  removeFromCart() {
    console.log('remove from cart');
  }
}
