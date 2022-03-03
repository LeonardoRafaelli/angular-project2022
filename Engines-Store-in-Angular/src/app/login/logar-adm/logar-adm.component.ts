import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-logar-adm',
  templateUrl: './logar-adm.component.html',
  styleUrls: ['./logar-adm.component.css']
})
export class LogarAdmComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.usuarioService.buscarUsuarios()
    // .then(resultado => {
    //   console.log('RESULTADO:', resultado);
    // }).catch(erro => {
    //   console.log('ERRO AO BUSCAR USUARIOS:', erro);
    // })
  }
  
  username = '';
  password = '';


  logar(){

    // if(this.username == "" || this.password == ""){
    //   alert("Há campos vazio!")
    // } else {
    //   this.usuarioService.buscarUsuarios()
    //   .then((resultado: User[]) =>{
    //     console.log(resultado)
    //     for(let i=0; i < resultado.length; i++) {
    //       if (this.username == resultado[i].NOME && this.password == resultado[i].PASSWORD){
    //         localStorage.setItem("User", this.username);
    //         this.router.navigate(['/home']);
    //       }
    //     } 
    //   });
    // };

};

  loginUsuario(){
    this.router.navigate(['/login'])
  }
  
  loginAdm(){
    this.router.navigate(['/login-admin'])
  }
  
}
