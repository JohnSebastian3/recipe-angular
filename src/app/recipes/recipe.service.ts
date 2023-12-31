import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Seasoned Pork',
  //     'A super tasy seasoned pork chop!',
  //     'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
  //     [new Ingredient('Meat', 1), new Ingredient('Black Pepper', 1)]
  //   ),
  //   new Recipe(
  //     'Shrimp Salad',
  //     'A healthy shrimp salad perfect for any occasion.',
  //     'https://www.publicdomainpictures.net/pictures/120000/nahled/shrimp-salad-1434452515ZNJ.jpg',
  //     [new Ingredient('Lettuce', 2), new Ingredient('Shrimp (Jumbo)', 6)]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
