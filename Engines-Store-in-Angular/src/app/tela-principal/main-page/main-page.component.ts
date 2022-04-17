import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../../services/produto.service'
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { promise } from 'protractor';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService
  ) { }

    newArrayProd = [];

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

  admin = localStorage.getItem("admin?");

  gerenciarProduto(){
    this.router.navigate(["add-product"])
  }


  async adicionarAoCarrinho(id){ 
    await this.confirmaID(id);

    console.log(this.idArray);

    if(this.idArray.length == 0){
      let qntd = prompt("Insira a quantidade que deseja adicionar ao carrinho:")
      this.carrinhoService.adicionarAoCarrinho(id, qntd);

      alert("Produto adicionado ao carrinho!");
      this.carrinhoService.buscarCarrinho()
      .then((result: any) => {
        console.log(result.list);
      })
    } else {
      alert("Produto já adicionado ao carrinho!");
    }
    
    this.idArray = [];
  } 

  idArray = [];

  async confirmaID(id){
    await this.carrinhoService.buscarCarrinho()
    .then((result: any) => {
      for(let i = 0; i < result.list.length; i++){
        if(result.list[i].produto_id == id){
          this.idArray.push(id);
        }
      }
    })

  }
    
  

  levaAoCarrinho(){
    this.router.navigate(["/carrinho"])
  }

  voltar(){
    localStorage.clear();
    this.router.navigate(["/"])
  }

}
