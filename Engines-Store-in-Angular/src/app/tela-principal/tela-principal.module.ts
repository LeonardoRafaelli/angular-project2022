import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { AdicionarProdutoComponent } from './adicionar-produto/adicionar-produto.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: "add-product", component: AdicionarProdutoComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  declarations: [MainPageComponent, AdicionarProdutoComponent]
})
export class TelaPrincipalModule { }
