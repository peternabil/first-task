import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedselection = "recipe";

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyB_NRZkBz6M0tdmj-9PClBEXeueMB6vwWo",
    authDomain: "recepie-book-a2491.firebaseapp.com",
  });
  }
}
