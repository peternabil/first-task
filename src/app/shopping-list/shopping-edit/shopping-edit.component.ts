import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm,FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs/subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slform:NgForm;
  subscription:Subscription;
  editmode = false;
  itemindex:number;
  ingredient:Ingredient;

  constructor(private sls:ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.sls.editing.subscribe(
      (index:number) => {
        this.itemindex=index;
        this.editmode = true;
        this.ingredient=this.sls.getter(index);
        this.slform.setValue(
          {name:this.ingredient.name,
          amount:this.ingredient.amount}
        );
      }
    );
  }
  onadditem(form:NgForm) {
    const value = form.value;
    let newingredient = new Ingredient(value.name,value.amount);
    if(this.editmode){
      this.sls.update(this.itemindex,newingredient);
    }
    else{
      this.sls.add(newingredient);
    }
    this.editmode = false;
    form.reset();
  }
  onclear(){
    this.slform.reset();
    this.editmode = false;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ondelete(){
    this.sls.delete(this.itemindex);
    this.onclear();
  }
}
