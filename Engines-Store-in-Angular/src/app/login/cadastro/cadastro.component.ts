import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  username = "";
  password = "";
  confirmPassword = "";

  ngOnInit() {
  }

  logar(){
    this.router.navigate(['/'])
  }

  registerNow(){
    if(this.username,  this.password){
      if(this.password != this.confirmPassword){
        alert("As senhas não coincidem!")
      } else {
        this.usuarioService.criarUsuario(this.username,  this.password);
        alert("Usuário cadastrado com sucesso!")
        this.router.navigate(['/']);
      }
      
    } else {
      alert("Há campos não preenchidos!")
    }
  }

}
