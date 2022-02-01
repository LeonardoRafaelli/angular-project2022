import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { LogarComponent } from './login/logar/logar.component';
import { LoginModule } from './login/login.module';
import { MainPageComponent } from './tela-principal/main-page/main-page.component';
import { TelaPrincipalModule } from './tela-principal/tela-principal.module';
import { CadastroComponent } from './login/cadastro/cadastro.component';

const routes: Routes = [
  {path: '', component: LogarComponent },
  {path: 'home', component: MainPageComponent},
  {path: 'cadastro', component: CadastroComponent}
  {path: '*', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LoginModule,
    FormsModule,
    TelaPrincipalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
