import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { UsuarioService } from 'src/app/services/usuario.service';
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
    private usuarioService: UsuarioService,
    private route: Router
  ) { }

  async ngOnInit() {
    await this.carrinhoService.buscarCarrinho()
    .then((result: any) => {
      for(let i = 0; i < result.list.length; i++){
        if(result.list[i].cliente_id == this.user){
          this.listaCarrinhoUsuario.push({id: result.list[i].id, idProduto: result.list[i].produto_id, idCliente: result.list[i].cliente_id, quantidade: result.list[i].quantidade});
        }
      }
    });
    await this.produtoService.buscarProdutos()
    .then((prods: any) => {
      for(let i = 0; i < prods.list.length; i++){
        for(let y = 0; y < this.listaCarrinhoUsuario.length; y++){
          if(prods.list[i].ID == this.listaCarrinhoUsuario[y].idProduto){
            this.newArrayProd.push({
              id: prods.list[i].ID,
              nome: prods.list[i].NOME,
              valorUni: prods.list[i].VALOR,
              img: prods.list[i].IMG,
              valor: (prods.list[i].VALOR * this.listaCarrinhoUsuario[y].quantidade),
              quantidade: this.listaCarrinhoUsuario[y].quantidade,
              idToRemove: this.listaCarrinhoUsuario[y].id
            }) 
          }
        }
      }
    })

    
    setTimeout(() => {
      this.notaFiscal();
    }, 300);


  }

  verificador =0;
  userCEP;
  cidade;
  bairro;
  rua;
  numero;
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

  async fetchCEP(cep){
    this.verificador = 1;
    await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(result => result.json())
    .then(resultado => {
        this.cidade = resultado.localidade;
        this.bairro = resultado.bairro;
        this.rua = resultado.logradouro;
    })
    .catch(err => console.log(err));
  }

  retiraDoCarrinho(id){
    this.carrinhoService.removerDoCarrinho(id)
    window.location.reload();
  }

  async realizarVenda(){
    let lista = this.newArrayProd;2
    await this.produtoService.buscarEstoque()
    .then((result: any) => {
      result.list.find(stock => {
        for(let i = 0; i < lista.length; i++){
          if(stock.id == lista[i].id){
            console.log(lista[i])
            if(lista[i].quantidade <= stock.quantidade){
              let alteraEstoque = stock.quantidade - lista[i].quantidade;
              this.produtoService.alterStock(alteraEstoque, stock.id);
              this.retiraDoCarrinho(lista[i].idToRemove);
              console.log(stock);
              alert("Venda realizada com sucesso!!")
            } else {
              if(confirm(`O produto: '${lista[i].nome}'.\nNão possui mais ${lista[i].quantidade} unidades em seu estoque.\nEstoque atual: ${stock.quantidade}\nDeseja remover ele do seu carrinho?`)){
                this.retiraDoCarrinho(lista[i].idToRemove);
              }
            }
          }
        }
      })
    })
  }

  voltar(){
    this.route.navigate(['/home'])
  }
}
