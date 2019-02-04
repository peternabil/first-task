import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs/subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  //providers: [RecipeService]
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  subscription:Subscription;

  constructor(private rs:RecipeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.rs.recipesChanged.subscribe(
      (recipes:Recipe[])=>{
        this.recipes = recipes;
      }
    );
    this.recipes = this.rs.getRecipes();
  }

  onNewR(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
