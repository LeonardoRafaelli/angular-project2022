import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../../services/produto.service'
import { CarrinhoService } from 'src/app/services/carrinho.service';

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
          this.produtoService.buscarEstoque()
          .then((result: any) => {
            result.list.find(estoque => {
              if(estoque.id == prod.ID && estoque.quantidade > 0){
                let prodTemp = {
                  id: prod.ID,
                  nome: prod.NOME,
                  valor: prod.VALOR,
                  img: prod.IMG,
                  estoque: estoque.quantidade
                }
                this.newArrayProd.push(prodTemp);
              }
            })
          })
         
        })
      });
  }


  idArray = [];
  admin = localStorage.getItem("admin?");
  user = localStorage.getItem("User");


  gerenciarProduto(){
    this.router.navigate(["add-product"])
  }

  

  async adicionarAoCarrinho(id, estoque){ 
    await this.confirmaID(id);

    if(this.idArray.length == 0){
      let qntd = prompt("Insira a quantidade que deseja adicionar ao carrinho:");
      if(qntd != null){
        if(qntd <= estoque){
          this.carrinhoService.adicionarAoCarrinho(this.user, id, qntd);
    
          alert("Produto adicionado ao carrinho!");
          this.carrinhoService.buscarCarrinho()
          .then((result: any) => {
            console.log(result.list);
          })
        }else {
          alert("Pedido ultrapassa a quantidade disponível: " + estoque);
        }
      } else {
        alert("Por favor, insira a quantidade à colocar na lista!")
      }
    } else {
      this.carrinhoService.buscarCarrinho()
      .then((result: any) => {
        console.log(result.list);
      })
      alert("Produto já adicionado ao seu carrinho!");
    }
  
    this.idArray = [];
  } 

  

  async confirmaID(id){
    await this.carrinhoService.buscarCarrinho()
    .then((result: any) => {
      for(let i = 0; i < result.list.length; i++){
        if(result.list[i].produto_id == id && this.user == result.list[i].cliente_id){
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
