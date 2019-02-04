import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageService } from '../shared/data-stored.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selected = new EventEmitter<string>();
  constructor(private dss:DataStorageService,private as:AuthService) { }

  ngOnInit() {
  }

  onClick(selection:string) {
    this.selected.emit(selection);
  }
  onsave(){
    this.dss.store().subscribe(
      (response:Response) => {
        console.log(response);
      }
    );
  }
  onfetch(){
    this.dss.fetch();
  }

  onlogout(){
    this.as.logout();
  }
}
