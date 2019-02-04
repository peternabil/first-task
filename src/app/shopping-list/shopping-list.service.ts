import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/subject';

export class ShoppingListService {

  changed = new Subject<Ingredient[]>();
  editing = new Subject<number>();

  ingredients : Ingredient[] = [
    new Ingredient("tomato",5),
    new Ingredient("meat",1)
  ];

  getter(id:number){
    return this.ingredients[id];
  }
  getIngredients(){
    return this.ingredients.slice();
  }
  add(ing:Ingredient){
     this.ingredients.push(ing);
     this.changed.next(this.ingredients.slice());
  }
  addingredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.changed.next(this.ingredients.slice());
  }
  update(index:number,ing:Ingredient){
    this.ingredients[index] = ing;
    this.changed.next(this.ingredients.slice());
  }
  delete(index:number){
    this.ingredients.splice(index,1);
    this.changed.next(this.ingredients.slice());
  }
}
