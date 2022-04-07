import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent implements OnInit {

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    this.produtoService.buscarProdutos()
    .then((result: any) => {
      result.list.find(prod => {
        let prodTemp = {
          id: prod.ID,
          nome: prod.NOME,
          valor: prod.VALOR,
          img: prod.IMG
        }

        this.newArrayProd.push(prodTemp);
      })

    });
  }

  productName;
  productPrice;
  qntdEstoque;
  removerNome;
  removerId;
  imgURL;
  arrayProdutos = [];


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
  
  newArrayProd = [];


  adicionarProduto(){
        if(this.verificaProduto()){
          this.usuarioService.criarProduto(this.productName, this.productPrice, this.imgURL)
          this.usuarioService.criarEstoque(this.qntdEstoque);
          // window.location.reload();
        } else { 
          alert("Nome ja inserido!")
        }
        
    setTimeout(() => {
      this.usuarioService.buscarDadosTabelas("PRODUTO");
      this.usuarioService.buscarDadosTabelas("ESTOQUE");
    }, 1000)
  }
  

  verificaProduto(){
    this.usuarioService.buscarDadosTabelas("PRODUTO")
    .then((resultado: any) => {
      resultado.find(produto => {
        if(this.productName == produto.NOME){
          return false;
        }
      })
    })
    return true;
  }

  removerProduto(id){
    this.produtoService.removerProduto(id);
    this.produtoService.removerEstoque(id);
    setTimeout(() => {
      this.usuarioService.buscarDadosTabelas("PRODUTO");
      this.usuarioService.buscarDadosTabelas("ESTOQUE");
    }, 1000);

    // window.location.reload();
  }

  limparInputs(){
    this.productName = '';
    this.productPrice = '';
    this.removerId = '';
    this.removerNome = '';
  }

}