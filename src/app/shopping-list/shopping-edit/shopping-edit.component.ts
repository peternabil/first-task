import { Component, OnInit, ElementRef, EventEmitter, ViewChild, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameinput') nameinputref:ElementRef;
  @ViewChild('amountinput') amountinputref:ElementRef;
  @Output() ingredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAdd() {
    let newingredient=new  Ingredient(this.nameinputref.nativeElement.value,this.amountinputref.nativeElement.value)
    this.ingredient.emit(newingredient);
  }
}
