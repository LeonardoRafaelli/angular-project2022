import { Injectable } from "@angular/core";


import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { UsuarioService } from "./services/usuario.service"

@Injectable()
export class CheckLogged implements CanActivate {
    constructor(
        private router: Router,
        private usuarios: UsuarioService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | Promise<boolean> | boolean {
        let USER = localStorage.getItem("User")
        let USERADM = localStorage.getItem("UserADM")
        let Google = localStorage.getItem("google?");
        if (USER || USERADM || Google) {
            return true;
        } else {
            this.router.navigate(['/'])
            return false;
        }
    }
}