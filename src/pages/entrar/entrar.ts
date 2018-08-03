import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
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
    public usuariosProvider: UsuariosProvider,
    public munuCtrl: MenuController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntrarPage');
  }

  cancelar() {
    this.navCtrl.setRoot(HomePage);
  }

  ativaMenuLogin(){
    this.munuCtrl.enable(true, 'usuarioComLogin');
    this.munuCtrl.enable(false, 'usuarioSemLogin');
  }

  loginUsuario() {
    console.log(this.usuario);
    this.usuariosProvider.loginUsuario(this.usuario).subscribe(res => {
      this.usuariosProvider.setStorage('usuario', res);
      // console.log(res);
      // this.usuario = res;
      this.ativaMenuLogin();
      this.cancelar();
    }, erro => {
      console.log("Errooo: " + erro.message);
    });
  }

}
