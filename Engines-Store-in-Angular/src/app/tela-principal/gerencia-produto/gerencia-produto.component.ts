import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-gerencia-produto',
  templateUrl: './gerencia-produto.component.html',
  styleUrls: ['./gerencia-produto.component.css']
})

export class GerenciaProdutoComponent implements OnInit {

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.produtoService.buscarProdutos()
    .then((result: any) => {
      result.list.find(prod => {
        let prodTemp = {
          id: prod.ID,
          nome: prod.NOME,
          valor: prod.VALOR,
          img: prod.IMG,
        }

        this.newArrayProd.push(prodTemp);
      })
    });
    let i = 0;
    this.produtoService.buscarEstoque()
    .then((result: any) => {
      result.list.find(est => {
        if(this.newArrayProd[i].id == est.id){
          this.newArrayProd[i]['estoque'] = est.quantidade;
          i++;
        }
      })
    })
  }

  productName;
  productPrice;
  qntdEstoque;
  imgURL = null;
  arrayProdutos = [];
  idTemporario;
  emAlteracao = 0;

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
      if(confirm("Deseja mesmo adicionar este produto? (Ele será visível aos usuários)")){
        this.usuarioService.criarProduto(this.productName, this.productPrice, this.imgURL)
        this.usuarioService.criarEstoque(this.qntdEstoque)
        
        window.location.reload();
      } else {
        alert("Cadastro do produto cancelado!")
        this.limparInputs();
      }
    } else {
      alert("Há campos não preenchidos! Ou a imagem é grande demais!")
    }
    this.infosProdutoEstoque();
  }


  verificaProduto(){
    let imgContaLetras = this.imgURL.split('');
    console.log(imgContaLetras.length);
    if(this.productName == '' || this.productPrice == '' || this.imgURL == null || this.qntdEstoque == '' || imgContaLetras.length > 20000){
      return false;
    }
    return true;
  }

  async removerProduto(id){
    this.produtoService.removerProduto(id);
    this.produtoService.removerEstoque(id);
   

    window.location.reload();
    setTimeout(() => {
      this.infosProdutoEstoque();
    }, 500);
  }

  limparInputs(){
    this.productName = '';
    this.productPrice = '';
    this.imgURL = "";
    this.qntdEstoque = '';
  }

  alterProduct(){
    this.produtoService.alterProduct(this.productName, this.productPrice, this.imgURL, this.idTemporario);
    this.produtoService.alterStock(this.qntdEstoque, this.idTemporario);
    this.idTemporario = null;
    this.emAlteracao = 0;
    window.location.reload();
    setTimeout(() => {
      this.infosProdutoEstoque();
    }, 500);
  }

  alterarProduto(id){
    this.emAlteracao = 1;
    this.produtoService.buscarProdutos()
    .then((result: any) => {
      result.list.find(prod => {
        if(prod.ID == id){
          this.productName = prod.NOME;
          this.productPrice = prod.VALOR;
          this.imgURL = prod.IMG;
        }
      })
      console.log(result.list);
    });

    this.produtoService.buscarEstoque()
    .then((result: any) => {
      result.list.find(estoque => {
        if(estoque.id == id){
          this.qntdEstoque = estoque.quantidade;
        }
      })
      console.log(result.list);
    })
    this.idTemporario = id;
  }

  cancelAlter(){
    this.limparInputs();
    this.limparIMG();
    this.idTemporario = null;
    this.emAlteracao = 0;
  }

  limparIMG(){
      this.imgURL = null;
  }

  //Função temporária para não poluir o código
  infosProdutoEstoque(){
    setTimeout(() => {
      this.usuarioService.buscarDadosTabelas("PRODUTO");
      this.usuarioService.buscarDadosTabelas("ESTOQUE");
    }, 1000);
  }
}
