import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  //(3rd execute)
// class- collection of properties and functions
// properties/varieables
// functions/methods -user defined functions
  constructor() { //(1st execute)

   }
  // it automatically invokes when the object is created
  // object initialization

  ngOnInit(): void { //(2nd execute)
    // its a life cycle hooks of angular
    // when component is created at same time it will initialize or authorized
  }

}
