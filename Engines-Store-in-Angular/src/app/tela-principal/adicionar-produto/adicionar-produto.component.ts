import { Component, OnInit } from '@angular/core';
import { shiftInitState } from '@angular/core/src/view';
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
  removerNome;
  removerId;
  imgURL;

  // CREATE TABLE IF NOT EXISTS FORNECEDOR (
  //   id INTEGER PRIMARY KEY,
  //   nome varchar(45) not null

  pegarImg(event){
    const file = new FileReader();
    file.onload = (e) => {
      this.imgURL = e.target.result;
    };
    file.readAsDataURL(event.target.files[0]);
  }

  
  voltar(){
    this.router.navigate(['/home']);
  }

  adicionarProduto(){
        if(this.verificaProduto()){
          this.usuarioService.criarProduto(this.productName, this.productPrice, this.imgURL)
          this.usuarioService.criarEstoque(this.qntdEstoque);
        } else {  
          alert("O ID cadastrado no produto, ja foi inserido!")
        }
        
    setTimeout(() => {
      this.usuarioService.buscarDadosTabelas("PRODUTO");
      this.usuarioService.buscarDadosTabelas("ESTOQUE");
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
    this.usuarioService.buscarDadosTabelas("PRODUTO")
    .then((resultado: any) => {
      for(let i = 0; i < resultado[i].lenght; i++){
        if(this.removerNome == resultado[i].nome){
          this.removerId = resultado[i].id
        }
      }
    })
    this.usuarioService.removerProduto(this.removerNome);
    setTimeout(() => {
      this.usuarioService.removerEstoque(this.removerId);
    }, 500);
    
    setTimeout(() => {
      this.usuarioService.buscarDadosTabelas("PRODUTO");
      this.usuarioService.buscarDadosTabelas("ESTOQUE");
    }, 1000)
  }

  limparInputs(){
    this.productName = '';
    this.productPrice = '';
    this.removerId = '';
    this.removerNome = '';
  }

}


// interface Product {
//   produtctName: string;
//   productPrice: number;
// }