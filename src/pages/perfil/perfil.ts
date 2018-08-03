import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

import { Usuario } from '../../interfaces/Usuario';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  usuario: Usuario = { nome: '', email: '', senha: '' };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public usuariosProvider: UsuariosProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');

    // this.usuario.id = 2;
    // this.usuariosProvider.setStorage('usuario', this.usuario);

    this.usuariosProvider.getStorage('usuario').then(usuario => {
      if (usuario) {
        this.usuario = usuario;
        this.usuariosProvider.showUsuario(this.usuario).subscribe(res => {
          this.usuario = res;
          this.usuariosProvider.setStorage('usuario', this.usuario);
        }, erro => {
          console.log("Errooo: " + erro.message);
        });
      } else {
        this.cancelar();
      }
    });
  }

  cancelar() {
    this.navCtrl.setRoot(HomePage);
  }

  editUsuario() {
    console.log(this.usuario);
    this.usuariosProvider.editUsuario(this.usuario).subscribe(res => {
      this.usuario = res;
    }, erro => {
      console.log("Errooo: " + erro.message);
    });
  }

}
