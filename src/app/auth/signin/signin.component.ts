import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private as:AuthService) { }

  ngOnInit() {
  }
  onSignin(f:NgForm){
    const email = f.value.email;
    const password = f.value.password;
    this.as.signin(email,password);
  }

}
