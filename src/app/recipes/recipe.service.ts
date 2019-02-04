// import { Component, OnInit, Injectable } from '@angular/core';
// import { Subject } from 'rxjs/subject';
// import { Recipe } from './recipe.model';
// import { Ingredient } from '../shared/ingredient.model';
// import { ShoppingListService } from '../shopping-list/shopping-list.service';
//
// @Injectable()
// export class RecipeService{
//   changed: new Subject<Recipe[]>();
  // private recipes : Recipe[] = [
  //   new Recipe("Burger","the small burger","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBFo5VP2XgNw8e2iHtROg2ZEQIYXHwo27KbR8OM0TWHMupXmPv",[new Ingredient("Meat",1),new Ingredient("buns",2),new Ingredient("lattace",1)]),new Recipe("Double Burger","the big burger","https://www.mcdonalds.co.za/sites/default/files/product/Big-Tasty.png",[new Ingredient("Meat",2),new Ingredient("buns",2),new Ingredient("lattace",2)])
  // ];
//
//   constructor(private sls:ShoppingListService){}
//
//   getter(){
//     return this.recipes.slice();
//   }
//   addtosl(ingredients:Ingredient[]){
//     this.sls.addingredients(ingredients);
//   }
//   getter1(id:number){
//     return this.recipes[id];
//   }
//   addrecipe(recipe: Recipe){
//     this.recipes.push(recipe);
//     this.changed.next(this.recipes.slice());
//   }
//   updaterecipe(index: number,recipe: Recipe){
//     this.recipes[index]=recipe;
//     this.changed.next(this.recipes.slice());
//   }
// }


import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes : Recipe[] = [
    new Recipe("Burger","the small burger","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBFo5VP2XgNw8e2iHtROg2ZEQIYXHwo27KbR8OM0TWHMupXmPv",[new Ingredient("Meat",1),new Ingredient("buns",2),new Ingredient("lattace",1)]),new Recipe("Double Burger","the big burger","https://www.mcdonalds.co.za/sites/default/files/product/Big-Tasty.png",[new Ingredient("Meat",2),new Ingredient("buns",2),new Ingredient("lattace",2)])
  ];

  constructor(private slService: ShoppingListService) {}

  set(recipes:Recipe[]){
    this.recipes=recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addingredients(ingredients);
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
