import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe1:Recipe;
  id:number;
  constructor(private rs:RecipeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.recipe1 = this.rs.getRecipe(this.id);
      }
    );
  }
  onaddtosl(){
    this.rs.addIngredientsToShoppingList(this.recipe1.ingredients);
  }
  onedit(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
  ondelete(){
    this.rs.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
