import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TelaCarrinhoComponent } from './tela-carrinho/tela-carrinho.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TelaCarrinhoComponent]
})
export class CarrinhoModule { }
