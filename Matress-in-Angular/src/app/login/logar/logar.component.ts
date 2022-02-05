import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider,
} from 'angular-6-social-login-v2';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})
export class LogarComponent implements OnInit {



  constructor(
    private router: Router,
    private socialAuthService: AuthService 
  ) { }

  
  username = '';
  password = '';

  ngOnInit() {
  }

  logar(){
    console.log('Username: ', this.username, '  Password: ', this.password);
    const users = [
      {login: 'leonardo', pass: '123'},
      {login: 'giuseppe', pass: '123'},
      {login: 'rafaelli', pass: '123'},
      {login: 'l', pass: 'l'}
    ]

    const find = users.find(e => e.login == this.username && e.pass == this.password);

    if(find){
      localStorage.setItem('User', this.username);
      this.router.navigate(['/home']);
    } else {
      alert("Usuário ou senha incorretos.");
    }

  }

  cadastrar(){
    this.router.navigate(['/cadastro'])
  }

  
  public socialSignIn(socialPlatform : string) {
    
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        this.router.navigate(['/home'])
      }
    );
  }
  
}

