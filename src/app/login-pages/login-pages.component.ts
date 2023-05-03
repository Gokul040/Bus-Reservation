import { Component,OnInit,Directive } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validator } from "@angular/forms";


@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.css']
})
export class LoginPagesComponent implements OnInit {
 

    // isLogin:boolean=true;
    // isRegister:boolean=false;
    // isAdmin:boolean=false;

    // constructor(private formbuilder:FormBuilder){
    //   this.isLogin =true;
    //   this.isRegister=false;
    //   this.isAdmin=false;
    // }
    ngOnInit(): void {
      console.log('Method not implemented.');
    }

// UserLogin(){
//   this.isLogin =true;
//   this.isRegister=false;
//   this.isAdmin=false;
// }
// UserRegister(){
//   this.isLogin =false;
//       this.isRegister=true;
//       this.isAdmin=false;
// }
// UserAdmin(){
//   this.isLogin =false;
//       this.isRegister=false;
//       this.isAdmin=true;
// }
}
