import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LogarComponent } from './logar/logar.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [LogarComponent, CadastroComponent]
})
export class LoginModule { }
