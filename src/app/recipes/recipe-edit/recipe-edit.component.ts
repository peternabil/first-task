import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editmode=false;
  recipeForm:FormGroup
  constructor(private route:ActivatedRoute,private rs:RecipeService,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.editmode = params['id'] != null;
        console.log(this.editmode);
        this.initForm();
      }
    );
  }
  private initForm(){
    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';
    let recipeIngredients = new FormArray([]);
    if(this.editmode){
      const recipe = this.rs.getRecipe(this.id);
      recipeName = recipe.name;
      recipeDescription = recipe.description;
      recipeImagePath = recipe.image;
      if(recipe['ingredients']){
        for(let ing of recipe.ingredients){
          recipeIngredients.push(new FormGroup({
            'name':new FormControl(ing.name,Validators.required),
            'amount':new FormControl(ing.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
    }
    this.recipeForm = new FormGroup(
      {'name':new FormControl(recipeName,Validators.required),
      'imagePath':new FormControl(recipeImagePath,Validators.required),
      'description':new FormControl(recipeDescription,Validators.required),
      'ingredients':recipeIngredients}
    );
  }
  onSubmit(){
    if(this.editmode){
      this.rs.updateRecipe(this.id,this.recipeForm.value);
    } else {
      this.rs.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }
  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }
  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }
  onDeleteIngredient(index:number){
  (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
  onDeleteRecipe(){
    this.rs.deleteRecipe(this.id);
  }
  ngOnDestroy(){

  }
}
