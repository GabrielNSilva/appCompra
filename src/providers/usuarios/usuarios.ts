import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../interfaces/Usuario';

/*
  Generated class for the UsuariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuariosProvider {

  url: string = "http://localhost:3000/usuarios/";
  headers: any;

  constructor(public http: HttpClient) {
    console.log('Hello UsuariosProvider Provider');
    // this.headers = {"headers": {"authorization": "Bearer "+this.token}};
  }

  addUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.url, usuario);
  }

}
