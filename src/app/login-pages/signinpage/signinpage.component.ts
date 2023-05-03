import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signinpage',
  templateUrl: './signinpage.component.html',
  styleUrls: ['./signinpage.component.css']
})
export class SigninpageComponent {

// '^(?=,*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'

  signinform = new FormGroup({
        user: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(16)])      
  })

  signinUser(){
    console.warn(this.signinform.value)
  }

  get user(){
    return this.signinform.get('user');
  }

  
  get password(){
    return this.signinform.get('password');
  }

  // get f (){
  //   return this.signinform.controls;
  // }
}
