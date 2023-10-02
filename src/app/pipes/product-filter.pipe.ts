import { Pipe, PipeTransform } from '@angular/core';
import { Food } from '../models/food.model';

@Pipe({
  name: 'productFilter',
  // pure: true,
})
export class ProductFilterPipe implements PipeTransform {
  transform(products: Food[], category: string): Food[] {
    if (category === 'All') return products;
    if (!products || !category) {
      return products; // Return the original array if it's not defined or the category is not defined
    }
    return products.filter((product) => product.category === category);
  }
}
