import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/subscription';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients : Ingredient[];
  private subscription:Subscription;
  constructor(private sls:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.sls.getIngredients();
    this.subscription = this.sls.changed.subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients = ingredients;
      }
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onedititem(index:number){
    this.sls.editing.next(index);
  }
}
