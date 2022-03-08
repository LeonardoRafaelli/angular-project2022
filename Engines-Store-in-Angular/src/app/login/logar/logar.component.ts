import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';


import {
    AuthService,
    GoogleLoginProvider,
} from 'angular-6-social-login-v2';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})

export class LogarComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private socialAuthService: AuthService 
  ) { }

  
  username = '';
  password = '';

  ngOnInit() {
    this.usuarioService.buscarUsuarios()
    .then(resultado => {
      console.log('RESULTADO:', resultado);
    }).catch(erro => {
      console.log('ERRO AO BUSCAR USUARIOS:', erro);
    })
  }

  logar(){

    if(this.username == "" || this.password == ""){
      alert("Há campos vazio!")
    } else {
      this.usuarioService.buscarUsuarios()
      .then((resultado: User[]) =>{
        console.log(resultado)
        for(let i=0; i < resultado.length; i++) {
          if (this.username == resultado[i].NOME && this.password == resultado[i].PASSWORD){
            localStorage.setItem("User", this.username);
            localStorage.setItem("admin?", "0");
            this.router.navigate(['/home']);
          }
        } 
      });
    };
};

  cadastrar(){
    this.router.navigate(['/cadastro'])
  }
  
  loginAdm(){
    this.router.navigate(['/login-admin'])
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

interface User {
  NOME: string;
  PASSWORD: string;
}
