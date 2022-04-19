import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';

import { LoginModule } from './login/login.module';
import { MainPageComponent } from './tela-principal/main-page/main-page.component';
import { TelaPrincipalModule } from './tela-principal/tela-principal.module';
import { CarrinhoModule } from './carrinho/carrinho-module.module';
import { CadastroComponent } from './login/cadastro/cadastro.component';
import { LogarComponent } from './login/logar/logar.component';
import { LogarAdmComponent } from './login/logar-adm/logar-adm.component';
import { CheckLogged } from './checkLogged';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from "angular-6-social-login-v2";


// Configs 
export function getAuthServiceConfigs() {
let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("421872872808-83c2pk3n192r5j5riigno0bdf7fgp2dd.apps.googleusercontent.com")
      },    
    ]
);
return config;
}

const routes: Routes = [
  {path: '', component: LogarComponent },
  {path: 'home', component: MainPageComponent, canActivate:[CheckLogged]},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login-admin', component: LogarAdmComponent},
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
    TelaPrincipalModule,
    CarrinhoModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs, 
    },
    CheckLogged
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


