import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { GerenciaProdutoComponent } from './gerencia-produto/gerencia-produto.component';
import { TelaCarrinhoComponent } from '../carrinho/tela-carrinho/tela-carrinho.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CheckLogged } from '../checkLogged';

const routes: Routes = [
  {path: "add-product", component: GerenciaProdutoComponent, canActivate: [CheckLogged]},
  {path: "carrinho", component: TelaCarrinhoComponent, canActivate: [CheckLogged]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  declarations: [MainPageComponent, GerenciaProdutoComponent],
  providers: [CheckLogged]
})

export class TelaPrincipalModule { }
