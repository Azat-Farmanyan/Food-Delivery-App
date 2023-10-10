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
          'Our Classic Cheeseburger is a timeless favorite. Sink your teeth into a juicy beef patty, perfectly grilled and topped with a generous layer of melted cheddar cheese. It is complemented by fresh lettuce, ripe tomato slices, and a secret special sauce, all nestled within a soft, toasted bun. This burger is the epitome of American comfort food.',
        category: 'Burgers',
        favorite: false,
        preparationTime: 15, // Example preparation time in minutes
        rating: 4.5, // Example rating out of 5
        amount: 0,
      },
      {
        id: 2,
        title: 'Chicken Alfredo',
        price: 12.99,
        image: this.imagePath + 'Chicken Alfredo.jpg',
        description:
          'Indulge in a creamy delight with our Chicken Alfredo. Tender strips of grilled chicken are smothered in a rich and velvety Alfredo sauce, then served over a bed of fettuccine pasta. Each bite is a harmonious blend of flavors that will transport your taste buds to Italy.',
        category: 'Dishes',
        favorite: false,
        preparationTime: 30, // Example preparation time in minutes
        rating: 4.7, // Example rating out of 5,
        amount: 0,
      },
      {
        id: 3,
        title: 'Salmon Sashimi',
        price: 15.99,
        image: this.imagePath + 'Salmon Sashimi.png',
        description:
          'For seafood lovers, our Salmon Sashimi is a culinary masterpiece. Enjoy fresh slices of raw salmon, served with a side of wasabi and soy sauce. Each bite is a delicate, melt-in-your-mouth experience that will leave you craving for more.',
        category: 'Sushi',
        favorite: false,
        preparationTime: 10, // Example preparation time in minutes
        rating: 4.8, // Example rating out of 5,
        amount: 0,
      },
      {
        id: 4,
        title: 'BBQ Bacon Burger',
        price: 10.49,
        image: this.imagePath + 'BBQ Bacon Burger.png',
        description:
          "Our BBQ Bacon Burger is a flavor explosion. A perfectly grilled burger patty is topped with crispy bacon, smothered in tangy BBQ sauce, and garnished with fresh onions. This burger is a carnivore's dream come true.",
        category: 'Burgers',
        favorite: false,
        preparationTime: 20, // Example preparation time in minutes
        rating: 4.4, // Example rating out of 5,
        amount: 0,
      },
      {
        id: 5,
        title: 'Beef Stroganoff',
        price: 13.99,
        image: this.imagePath + 'Beef Stroganoff.jpg',
        description:
          'Our Beef Stroganoff is a hearty classic. Tender strips of beef are bathed in a creamy mushroom sauce and served over a bed of perfectly cooked noodles. This dish is the ultimate comfort food that will warm your soul.',
        category: 'Dishes',
        favorite: false,
        preparationTime: 25, // Example preparation time in minutes
        rating: 4.6, // Example rating out of 5,
        amount: 0,
      },
      {
        id: 6,
        title: 'Spicy Tuna Roll',
        price: 9.99,
        image: this.imagePath + 'Spicy Tuna Roll.jpg',
        description:
          "Our Spicy Tuna Roll is a delightful sushi creation. Inside the roll, you'll find a tantalizing combination of spicy tuna, crisp cucumber, and creamy avocado. With each bite, you'll experience a burst of flavors that will spice up your palate.",
        category: 'Sushi',
        favorite: false,
        preparationTime: 15, // Example preparation time in minutes
        rating: 4.9, // Example rating out of 5,
        amount: 0,
      },
      {
        id: 7,
        title: 'Veggie Burger',
        price: 7.99,
        image: this.imagePath + 'Veggie Burger.png',
        description:
          "Our Veggie Burger is a plant-based delight. It features a delicious plant-based patty accompanied by fresh lettuce, juicy tomato, and vegan mayonnaise. It's a guilt-free burger that doesn't compromise on taste.",
        category: 'Burgers',
        favorite: false,
        preparationTime: 15, // Example preparation time in minutes
        rating: 4.3, // Example rating out of 5,
        amount: 0,
      },
      {
        id: 8,
        title: 'Shrimp Scampi',
        price: 14.99,
        image: this.imagePath + 'Shrimp Scampi.jpeg',
        description:
          "Our Shrimp Scampi is a seafood lover's paradise. Succulent shrimp are sautéed to perfection in a garlic and butter sauce, then elevated with a touch of white wine. This dish is a gourmet experience that will leave you craving more.",
        category: 'Dishes',
        favorite: false,
        preparationTime: 20, // Example preparation time in minutes
        rating: 4.7, // Example rating out of 5,
        amount: 0,
      },
      {
        id: 9,
        title: 'California Roll',
        price: 11.49,
        image: this.imagePath + 'California Roll.jpg',
        description:
          "Our California Roll is a sushi classic. This roll features a delectable combination of crab, creamy avocado, crisp cucumber, and delicate tobiko. It's a delightful roll that captures the essence of California flavors.",
        category: 'Sushi',
        favorite: false,
        preparationTime: 10, // Example preparation time in minutes
        rating: 4.5, // Example rating out of 5,
        amount: 0,
      },
      {
        id: 10,
        title: 'Double Bacon Cheeseburger',
        price: 12.99,
        image: this.imagePath + 'Double Bacon Cheeseburger.jpg',
        description:
          "Our Double Bacon Cheeseburger is a carnivore's dream. It features not one, but two perfectly grilled beef patties, each topped with crispy bacon, gooey cheese, fresh lettuce, and our secret sauce. If you're looking for the ultimate burger indulgence, this is it.",
        category: 'Burgers',
        favorite: false,
        preparationTime: 18, // Example preparation time in minutes
        rating: 4.4, // Example rating out of 5,
        amount: 0,
      },
      {
        id: 11,
        title: 'Chicken Parmesan',
        price: 13.49,
        image: this.imagePath + 'Chicken Parmesan.jpg',
        description:
          "Our Chicken Parmesan is a crispy, cheesy delight. A breaded chicken cutlet is generously smothered in marinara sauce and topped with a layer of melted mozzarella cheese. It's a classic Italian dish that's pure comfort on a plate.",
        category: 'Dishes',
        favorite: false,
        preparationTime: 25, // Example preparation time in minutes
        rating: 4.6, // Example rating out of 5,
        amount: 0,
      },
      {
        id: 12,
        title: 'Dragon Roll',
        price: 16.99,
        image: this.imagePath + 'Dragon Roll.jpg',
        description:
          "Our Dragon Roll is a sushi masterpiece. Inside, you'll find a delightful combination of eel, creamy avocado, crisp cucumber, and a drizzle of eel sauce. This roll is as visually stunning as it is delicious.",
        category: 'Sushi',
        favorite: false,
        preparationTime: 15, // Example preparation time in minutes
        rating: 4.8, // Example rating out of 5,
        amount: 0,
      },
      {
        id: 13,
        title: 'Mushroom Swiss Burger',
        price: 9.99,
        image: this.imagePath + 'Mushroom Swiss Burger.jpg',
        description:
          "Our Mushroom Swiss Burger is a umami explosion. A perfectly grilled burger is crowned with a mound of sautéed mushrooms and topped with creamy Swiss cheese. It's a burger that will satisfy your cravings for savory flavors.",
        category: 'Burgers',
        favorite: false,
        preparationTime: 17, // Example preparation time in minutes
        rating: 4.3, // Example rating out of 5,
        amount: 0,
      },
      {
        id: 14,
        title: 'Beef Tacos',
        price: 8.49,
        image: this.imagePath + 'Beef Tacos.jpg',
        description:
          "Our Beef Tacos are a fiesta on a plate. Soft tortillas are generously filled with seasoned ground beef, fresh lettuce, and a zesty salsa. It's a flavor-packed experience that's perfect for sharing with friends and family.",
        category: 'Dishes',
        favorite: false,
        preparationTime: 12, // Example preparation time in minutes
        rating: 4.5, // Example rating out of 5,
        amount: 0,
      },
      {
        id: 15,
        title: 'Rainbow Roll',
        price: 17.99,
        image: this.imagePath + 'Rainbow Roll.jpg',
        description:
          'Our Rainbow Roll is a visual and culinary delight. This sushi roll features a vibrant assortment of fresh fish, creamy avocado, and the subtle crunch of cucumber. Each bite is like tasting a rainbow of flavors.',
        category: 'Sushi',
        favorite: false,
        preparationTime: 20, // Example preparation time in minutes
        rating: 4.9, // Example rating out of 5,
        amount: 0,
      },
      {
        id: 16,
        title: 'Veggie Stir-Fry',
        price: 10.99,
        image: this.imagePath + 'Veggie Stir-Fry.jpg',
        description:
          "Our Veggie Stir-Fry is a vegetarian delight. Colorful mixed vegetables are stir-fried to perfection, accompanied by cubes of tofu, all coated in a savory and aromatic sauce. It's a healthy and flavorful option for those seeking a meatless meal.",
        category: 'Dishes',
        favorite: false,
        preparationTime: 22, // Example preparation time in minutes
        rating: 4.7, // Example rating out of 5,
        amount: 0,
      },
    ];
  }

  getFoodById(id: number): Food | undefined {
    return this.getFoods().find((food) => food.id === id);
  }
}
