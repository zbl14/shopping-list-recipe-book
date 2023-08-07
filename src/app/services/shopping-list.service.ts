import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../common/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('banana', 6),
  ];

  getIngredient() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  constructor() {}
}
