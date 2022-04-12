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
  }

  username = '';
  password = '';

  loginUsuario(){
    this.router.navigate(['/'])
  }

  loginAdm(){

    if(this.username == "" || this.password == ""){
      alert("Há campos vazio!")
    } else {
      this.usuarioService.buscarDadosTabelas("ADMINISTRADOR")
      .then((resultado: any) =>{
        console.log(resultado)
          if (this.username == resultado[0].nome && this.password == resultado[0].password){
            localStorage.setItem("UserADM", resultado[0].id);
            localStorage.setItem("admin?", "1");
            this.router.navigate(['/home']);
        } else {
          alert("Usuário ou senha incorretos!")
        }
      });
    };


  }

}
