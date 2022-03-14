import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
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
