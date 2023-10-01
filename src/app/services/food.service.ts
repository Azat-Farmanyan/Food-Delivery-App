import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  imagePath = '../../../assets/foods/';

  getFoods(): Food[] {
    return [
      {
        id: 1,
        title: 'Classic Cheeseburger',
        price: 8.99,
        image: this.imagePath + 'Classic Cheeseburger.jpg',
        description:
          'Juicy beef patty with cheddar cheese, lettuce, tomato, and special sauce.',
        category: 'Burgers',
      },
      {
        id: 2,
        title: 'Chicken Alfredo',
        price: 12.99,
        image: this.imagePath + 'Chicken Alfredo.jpg',
        description:
          'Creamy fettuccine pasta with grilled chicken and Alfredo sauce.',
        category: 'Dishes',
      },
      {
        id: 3,
        title: 'Salmon Sashimi',
        price: 15.99,
        image: this.imagePath + 'Salmon Sashimi.png',
        description:
          'Fresh slices of raw salmon, served with wasabi and soy sauce.',
        category: 'Sushi',
      },
      {
        id: 4,
        title: 'BBQ Bacon Burger',
        price: 10.49,
        image: this.imagePath + 'BBQ Bacon Burger.png',
        description:
          'Grilled burger topped with crispy bacon, BBQ sauce, and onions.',
        category: 'Burgers',
      },
      {
        id: 5,
        title: 'Beef Stroganoff',
        price: 13.99,
        image: this.imagePath + 'Beef Stroganoff.jpg',
        description:
          'Tender beef strips in a creamy mushroom sauce, served over noodles.',
        category: 'Dishes',
      },
      {
        id: 6,
        title: 'Spicy Tuna Roll',
        price: 9.99,
        image: this.imagePath + 'Spicy Tuna Roll.jpg',
        description:
          'Sushi roll filled with spicy tuna, cucumber, and avocado.',
        category: 'Sushi',
      },
      {
        id: 7,
        title: 'Veggie Burger',
        price: 7.99,
        image: this.imagePath + 'Veggie Burger.png',
        description:
          'Plant-based patty with lettuce, tomato, and vegan mayonnaise.',
        category: 'Burgers',
      },
      {
        id: 8,
        title: 'Shrimp Scampi',
        price: 14.99,
        image: this.imagePath + 'Shrimp Scampi.jpeg',
        description:
          'Succulent shrimp sautéed in garlic, butter, and white wine.',
        category: 'Dishes',
      },
      {
        id: 9,
        title: 'California Roll',
        price: 11.49,
        image: this.imagePath + 'California Roll.jpg',
        description: 'Sushi roll with crab, avocado, cucumber, and tobiko.',
        category: 'Sushi',
      },
      {
        id: 10,
        title: 'Double Bacon Cheeseburger',
        price: 12.99,
        image: this.imagePath + 'Double Bacon Cheeseburger.jpg',
        description:
          'Two beef patties, double bacon, cheese, lettuce, and secret sauce.',
        category: 'Burgers',
      },
      {
        id: 11,
        title: 'Chicken Parmesan',
        price: 13.49,
        image: this.imagePath + 'Chicken Parmesan.jpg',
        description:
          'Breaded chicken cutlet with marinara sauce and melted mozzarella.',
        category: 'Dishes',
      },
      {
        id: 12,
        title: 'Dragon Roll',
        price: 16.99,
        image: this.imagePath + 'Dragon Roll.jpg',
        description:
          'Sushi roll featuring eel, avocado, cucumber, and eel sauce.',
        category: 'Sushi',
      },
      {
        id: 13,
        title: 'Mushroom Swiss Burger',
        price: 9.99,
        image: this.imagePath + 'Mushroom Swiss Burger.jpg',
        description:
          'Grilled burger topped with sautéed mushrooms and Swiss cheese.',
        category: 'Burgers',
      },
      {
        id: 14,
        title: 'Beef Tacos',
        price: 8.49,
        image: this.imagePath + 'Beef Tacos.jpg',
        description:
          'Soft tortillas filled with seasoned ground beef, lettuce, and salsa.',
        category: 'Dishes',
      },
      {
        id: 15,
        title: 'Rainbow Roll',
        price: 17.99,
        image: this.imagePath + 'Rainbow Roll.jpg',
        description:
          'Sushi roll with a colorful assortment of fish and avocado.',
        category: 'Sushi',
      },
      {
        id: 16,
        title: 'Veggie Stir-Fry',
        price: 10.99,
        image: this.imagePath + 'Veggie Stir-Fry.jpg',
        description:
          'Stir-fried mixed vegetables with tofu and a savory sauce.',
        category: 'Dishes',
      },
    ];
  }

  getFood(id: number): Food | undefined {
    return this.getFoods().find((food) => food.id === id);
  }
}
