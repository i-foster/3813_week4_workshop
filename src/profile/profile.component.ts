import { Component } from '@angular/core';
import { LogonService } from '../services/logon.service';
import { Router } from '@angular/router';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent  { 
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
    this.loggedin()
  }
    
  loggedin(){
    if (localStorage.getItem("cuser") == null){
      this.router.navigateByUrl("/login")
    }else {
      let us:any = localStorage.getItem("cuser")

      this.user = (JSON.parse(us))
      console.log(this.user.username)

      if (this.user.valid == false){
        this.router.navigateByUrl("/login")
      }else{
        
      }
    }
  }
  submit(){
    let userDataString = JSON.stringify(this.user)
    this.localstore.saveData("cuser",userDataString)
    console.log(localStorage.getItem("cuser"))
  }
}
