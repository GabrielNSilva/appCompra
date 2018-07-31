import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../interfaces/Usuario';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { HomePage } from '../home/home';

/**
 * Generated class for the EntrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-entrar',
  templateUrl: 'entrar.html',
})
export class EntrarPage {

  usuario: Usuario = { email: '', senha: '' };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public usuariosProvider: UsuariosProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntrarPage');
  }

  cancelar() {
    this.navCtrl.setRoot(HomePage);
  }

  loginUsuario() {
    console.log(this.usuario);
    this.usuariosProvider.loginUsuario(this.usuario).subscribe(res => {
      console.log(res);
      // this.usuario = res;
    }, erro => {
      console.log("Errooo: " + erro.message);
    });
  }

}
