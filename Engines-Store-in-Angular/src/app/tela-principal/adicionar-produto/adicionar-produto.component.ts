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

  productName;
  productPrice;
  qntdEstoque;
  corredor;
  lado;
  prateleira;
  nomeForn;
  idForn;
  idEsto;
  removerNome;
  removerId;

  // CREATE TABLE IF NOT EXISTS FORNECEDOR (
  //   id INTEGER PRIMARY KEY,
  //   nome varchar(45) not null



  voltar(){
    this.router.navigate(['/home']);
  }

  adicionarProduto(){

    if(this.verificaProduto()){
      this.usuarioService.criarEstoque(this.idEsto, this.qntdEstoque);
      this.usuarioService.criarProduto(this.idEsto, this.productName, this.productPrice);
    } else {
      alert("O ID cadastrado no produto, ja foi inserido!")
    }

    setTimeout(() => {
      this.usuarioService.buscarDadosTabelas("PRODUTO");
    }, 1000)

  }
  
  verificaProduto(){
    this.usuarioService.buscarDadosTabelas("PRODUTO")
    .then((resultado: any) => {
      for(let i = 0; i < resultado[i].lenght; i++){
        if(this.productName == resultado[i].nome){
          return false;
        }
      }
    })
    return true;
  }

  removerProduto(){
    this.usuarioService.removerProduto(this.removerId);
    setTimeout(() => {
    this.usuarioService.buscarDadosTabelas("PRODUTO");
    }, 1000)
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
    this.removerId = '';
    this.removerNome = '';
  }

}


// interface Product {
//   produtctName: string;
//   productPrice: number;
// }