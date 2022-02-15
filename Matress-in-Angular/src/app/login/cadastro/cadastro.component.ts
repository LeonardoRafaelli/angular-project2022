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
  
  ngOnInit() {
  }
  
  logar(){
    this.router.navigate(['/'])
  }

  registerNow(){
    this.usuarioService.criarUsuario(this.username,  this.password)
  }

}
