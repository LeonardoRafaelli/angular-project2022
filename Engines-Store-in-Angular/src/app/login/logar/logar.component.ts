import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';


import {
    AuthService,
    GoogleLoginProvider,
} from 'angular-6-social-login-v2';
import { shiftInitState } from '@angular/core/src/view';

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
    localStorage.clear();
    this.usuarioService.buscarUsuarios()
    .then((lista: any) => {
      console.log(lista);
    });
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
            localStorage.setItem("User", resultado[i].ID);
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

  public async socialSignIn(socialPlatform : string) {
    await this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (userData) => {
        this.usuarioService.buscarUsuarios()
        .then((lista: User[]) =>{
          let confirma = 0;
          localStorage.setItem("google?", "1");
          for(let i = 0; i < lista.length; i++){
            if(lista[i].NOME == userData.name){
              confirma = 1;
            }
          }
          if(confirma == 0){
            this.usuarioService.criarUsuario(userData.name, null, null);
          }
        });
        console.log(socialPlatform+" sign in data : " , userData);
        setTimeout(() => {
          this.router.navigate(['/home'])
        }, 1000);
      }
    );
  }

}

interface User {
  ID: string;
  NOME: string;
  PASSWORD: string;
}
