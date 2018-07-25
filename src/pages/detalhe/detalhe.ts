import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AulaPage } from '../aula/aula';
import { Curso } from '../../interfaces/Curso';

/**
 * Generated class for the DetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  curso: Curso;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.curso = this.navParams.get('dados');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePage');
  }

  abreAula(aula){
    this.navCtrl.push(AulaPage, { dados: aula });
  }

}
