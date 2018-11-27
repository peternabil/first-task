import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe("test","test description","https://elavegan.com/wp-content/uploads/2018/01/peanut-butter-noodles-vegan-gluten-free-with-veggies.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
