import { Component } from '@angular/core';
import { LogonService } from '../services/logon.service';
import { Router } from '@angular/router';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  constructor(private router:Router, private localstore:LogonService){ 
  }
  user = {
    "username":"",
    "birthdate":"",
    "age":0,
    "email":"",
    "password":"",
    "valid":false
}
ngOnInit():void {
  this.userDetail()
}
  userDetail(){
    if (localStorage.getItem("cuser") == null){
      this.router.navigateByUrl("/login")}
    let us:any = localStorage.getItem("cuser")
    this.user = (JSON.parse(us))
  }
}

