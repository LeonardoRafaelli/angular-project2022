import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tela-carrinho',
  templateUrl: './tela-carrinho.component.html',
  styleUrls: ['./tela-carrinho.component.css']
})
export class TelaCarrinhoComponent implements OnInit {

  constructor(
    private carrinhoService: CarrinhoService,
    private produtoService: ProdutoService,
    private route: Router
  ) { }

  async ngOnInit() {
    await this.carrinhoService.buscarCarrinho()
    .then((result: any) => {
      for(let i = 0; i < result.list.length; i++){
        if(result.list[i].cliente_id == this.user){
          this.listaCarrinhoUsuario.push({id: result.list[i].id, idProduto: result.list[i].produto_id, quantidade: result.list[i].quantidade});
        }
      }
    });
    console.log("Lista carrinho: " , this.listaCarrinhoUsuario);
    await this.produtoService.buscarProdutos()
    .then((result: any) => {
      for(let i = 0; i < result.list.length; i++){
        for(let y = 0; y < this.listaCarrinhoUsuario.length; y++){
          if(result.list[i].ID == this.listaCarrinhoUsuario[y].idProduto){
              this.newArrayProd.push({
                  id: result.list[i].ID,
                  nome: result.list[i].NOME,
                  valorUni: result.list[i].VALOR,
                  img: result.list[i].IMG,
                  valor: (result.list[i].VALOR * this.listaCarrinhoUsuario[y].quantidade),
                  quantidade: this.listaCarrinhoUsuario[y].quantidade,
                  idToRemove: this.listaCarrinhoUsuario[y].id
              })
          }
        }
      }
    })
    this.notaFiscal();
  }

  user = localStorage.getItem("User");
  admin = localStorage.getItem("admin?")
  valorCarrinho=0;
  qntdProdutosNaLista=0;
  newArrayProd = [];
  listaCarrinhoUsuario = [];

  notaFiscal(){
    let lista = this.newArrayProd;
    for(let i = 0; i < lista.length; i++){
      this.valorCarrinho += lista[i].valor;
      this.qntdProdutosNaLista += 1;
    }
  }

  retiraDoCarrinho(id){
    console.log(id);
    this.carrinhoService.removerDoCarrinho(id)
    window.location.reload();
  }

  voltar(){
    this.route.navigate(['/home'])
  }
}
