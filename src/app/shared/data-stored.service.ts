import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

  constructor(private http:Http,private rs:RecipeService,private as:AuthService){}

  store(){
    return this.http.put('https://recepie-book-a2491.firebaseio.com/recipes.json',this.rs.getRecipes());
  }
  fetch(){
    const token = this.as.getToken()
    this.http.get('https://recepie-book-a2491.firebaseio.com/recipes.json?auth='+token).subscribe(
      (response:Response)=>{
        this.rs.set(response.json());
      }
    );
    console.log("the token = "+token);

  }



}
