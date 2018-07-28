import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Usuario } from '../../interfaces/Usuario';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  usuario: Usuario = {nome: '', email: '', senha: ''};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public usuariosProvider: UsuariosProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  cancelar(){
    this.navCtrl.setRoot(HomePage);
  }

  addUsuario(){
    console.log(this.usuario);
    this.usuariosProvider.addUsuario(this.usuario).subscribe(res => {
      console.log(res);
    }, erro => {
      console.log("Errooo: " + erro.message);
    });
  }

}
