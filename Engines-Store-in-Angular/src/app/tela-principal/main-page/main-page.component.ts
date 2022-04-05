import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../../services/produto.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(
    private router: Router,
    private produtoService: ProdutoService
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

  voltar(){
    localStorage.clear();
    this.router.navigate(["/"])
  }

}
