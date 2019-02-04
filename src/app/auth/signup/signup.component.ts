import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private as: AuthService) { }

  ngOnInit() {
  }
  onSignup(f:NgForm){
    const email = f.value.email;
    const password = f.value.password;
    this.as.signup(email,password);
  }
}
