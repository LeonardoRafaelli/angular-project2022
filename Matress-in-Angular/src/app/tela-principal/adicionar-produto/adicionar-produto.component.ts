import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  productName;
  productPrice;

  voltar(){
    this.router.navigate(['/home'])
  }

}
