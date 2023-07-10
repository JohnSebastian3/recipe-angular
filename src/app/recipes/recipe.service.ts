import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Seasoned Pork',
      'A super tasy seasoned pork chop!',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Black Pepper', 1)]
    ),
    new Recipe(
      'Shrimp Salad',
      'A healthy shrimp salad perfect for any occasion.',
      'https://www.publicdomainpictures.net/pictures/120000/nahled/shrimp-salad-1434452515ZNJ.jpg',
      [new Ingredient('Lettuce', 2), new Ingredient('Shrimp (Jumbo)', 6)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // send array copy
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
