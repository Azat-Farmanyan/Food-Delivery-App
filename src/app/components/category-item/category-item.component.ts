import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Category } from 'src/app/models/categories.model';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent implements OnInit {
  @Input() item: Category;
  @Output() setActive = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
