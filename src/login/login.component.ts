import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  constructor(private router:Router){ 
  }

  currentuser = {
    name:'',
    pword:''
  }
  
  ngOnInit(): void {
  }

  formsubmit(){

    type user = {
      username:string;
      password:string;
    };

    let users:user[] = [
      {username:"123",password:"abc"},
      {username:"456",password:"sdf"},
      {username:"i",password:"i"} 
    ];
    let checker:number = 1;

    if (this.currentuser.name !="" && this.currentuser.pword !=""){
      for(let i=0; i < users.length; i++){
        if (this.currentuser.name == users[i].username && this.currentuser.pword == users[i].password){
          checker = checker - 1;
          this.router.navigateByUrl("/account")
        }
        checker +=1;    
      }
      if (checker > users.length){
        alert("Username or Password does not match")
      }
    }
  }
}
