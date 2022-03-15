import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent implements OnInit {

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

  productId;
  productName;
  productPrice;
  qntdEstoque;
  corredor;
  lado;
  prateleira;
  nomeForn;
  idForn;
  idEsto;

  // CREATE TABLE IF NOT EXISTS FORNECEDOR (
  //   id INTEGER PRIMARY KEY,
  //   nome varchar(45) not null



  voltar(){
    this.router.navigate(['/home'])
  }

  adicionarProduto(){
    this.usuarioService.criarProduto(this.productId, this.idForn, this.idEsto, this.productName, this.productPrice, this.qntdEstoque, this.corredor, this.lado, this.prateleira, this.nomeForn)
  }

  limparInputs(){
    this.idForn = '';
    this.idEsto = '';
    this.productId = '';
    this.productName = '';
    this.productPrice = '';
    this.qntdEstoque = '';
    this.corredor = '';
    this.lado = '';
    this.prateleira = '';
    this.nomeForn = '';
  }

}


// interface Product {
//   produtctName: string;
//   productPrice: number;
// }