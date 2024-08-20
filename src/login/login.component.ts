import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LogonService } from '../services/logon.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  constructor(private router:Router, private localstore:LogonService){ 
  }

  currentuser = {
    name:'',
    pword:''
  }
  
  ngOnInit(): void {
  }

   details = [
        {"username":"i",
        "birthdate":"1/01/2000",
        "age":24,
        "email":"i@com",
        "password":"i",
        "valid":false
    },
    {"username":"z",
        "birthdate":"1/01/2000",
        "age":24,
        "email":"z@com",
        "password":"z",
        "valid":false
    },
    {"username":"a",
      "birthdate":"1/01/2000",
      "age":24,
      "email":"a@com",
      "password":"a",
      "valid":false
    }];

  formsubmit(){

    type user = {
      username:string;
      password:string;
    };

    let users:user[] = [
      {username:"i",password:"i"},
      {username:"456",password:"sdf"},
      {username:"a",password:"a"} 
    ];
    let checker:number = 1;

    if (this.currentuser.name !="" && this.currentuser.pword !=""){
      for(let i=0; i < users.length; i++){
        if (this.currentuser.name == users[i].username && this.currentuser.pword == users[i].password){
          checker = checker - 1;
          this.details[i].valid = true;
          this.localstore.saveData("cuser",JSON.stringify(this.details[i]))
          this.router.navigateByUrl("/profile")
        }
        checker +=1;    
      }
      if (checker > users.length){
        alert("Username or Password does not match")
      }
    }
  }
}