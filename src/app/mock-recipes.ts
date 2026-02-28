import { RecipeModel } from './models';

export const MOCK_RECIPES: RecipeModel[] = [
  {
    id: 1,
    name: 'Spaghetti Bolognese',
    description: 'A classic Italian pasta dish with rich meat sauce.',
    imgUrl: 'https://example.com/spaghetti.jpg',
    isFavorite: false,
    ingredients: [
      { name: 'Spaghetti', quantity: 200, unit: 'g' },
      { name: 'Ground Beef', quantity: 300, unit: 'g' },
      { name: 'Tomato Sauce', quantity: 400, unit: 'ml' },
      { name: 'Onion', quantity: 1, unit: 'pc' },
      { name: 'Garlic', quantity: 2, unit: 'cloves' }
    ]
  },
  {
    id: 2,
    name: 'Chicken Curry',
    description: 'A flavorful curry dish with tender chicken pieces.',
    imgUrl: 'https://example.com/chicken-curry.jpg',
    isFavorite: true,
    ingredients: [
      { name: 'Chicken Breast', quantity: 500, unit: 'g' },
      { name: 'Curry Powder', quantity: 2, unit: 'tbsp' },
      { name: 'Coconut Milk', quantity: 400, unit: 'ml' },
      { name: 'Onion', quantity: 1, unit: 'pc' },
      { name: 'Garlic', quantity: 3, unit: 'cloves' }
    ]
  }
];
