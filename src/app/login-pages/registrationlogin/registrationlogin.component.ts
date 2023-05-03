import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrationlogin',
  templateUrl: './registrationlogin.component.html',
  styleUrls: ['./registrationlogin.component.css']
})
export class RegistrationloginComponent {

  registerform = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*'),Validators.maxLength(16)]),
    useremail: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(16)]),

})

registerUser(){
console.warn(this.registerform.value)
}

get username(){
return this.registerform.get('username');
}
get useremail(){
  return this.registerform.get('useremail');
  }


get password(){
return this.registerform.get('password');
}

}
