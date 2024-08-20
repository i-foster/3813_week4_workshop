import { Component } from '@angular/core';
import { LogonService } from '../services/logon.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent  { 
  constructor(private router:Router, private localstore:LogonService){ 
  }


  ngOnInit():void {
    this.loggedin()
  }
    
  loggedin(){
    if (localStorage.getItem("cuser") == null){
      this.router.navigateByUrl("/login")
    }else {
      
    let us:any = localStorage.getItem("cuser")
    console.log(us);

    let user = (JSON.parse(us))
    console.log(user.username)

    if (user.valid == true){
      console.log("true");
    } 
  }
  }


}
