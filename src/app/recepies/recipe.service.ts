import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Schnitzel',
      'Super tasty schnitzel - Just Awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/d/d9/Hungarian_schnitzel_with_nokedli.png',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://www.fatburgercanada.com/wp-content/uploads/2015/07/fb15_BigFatBiz.png',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 10)
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngridients(ingredients);
  }
}
