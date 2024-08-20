import { Component } from '@angular/core';
import { LogonService } from '../services/logon.service';
import { Router } from '@angular/router';

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
    //localStorage.
  }


}
