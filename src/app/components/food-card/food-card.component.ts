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
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
})
export class FoodCardComponent implements OnInit, OnChanges {
  @Input() item: Food;
  @Output() onAdd = new EventEmitter();
  noProduct: boolean = false;
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.item) this.noProduct = true;

    // console.log(this.noProduct);

    // console.log(this.item);
  }
}
