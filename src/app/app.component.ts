import { Component,OnInit } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular with @angular/fire';

  email: string;
  password: string;


  ngOnInit(): void {


  }



  constructor(public authService: AuthService){}

  loginWithEmail(){
    this.authService.loginWithEmail(this.email, this.password);
    this.email= this.password = "";
  }

  loginWithGoogle(){
    this.authService.loginWitchGoogle();
  }

  logout(){
    this.authService.logout();
  }



}
