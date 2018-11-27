import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selected = new EventEmitter<Recipe>();
  recipes : Recipe[] = [
    new Recipe("test","test description","https://elavegan.com/wp-content/uploads/2018/01/peanut-butter-noodles-vegan-gluten-free-with-veggies.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelect(recipe:Recipe) {
    this.selected.emit(recipe);
  }


}
