import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhePage } from '../detalhe/detalhe';
import { Curso } from '../../interfaces/Curso';
import { CursosProvider } from '../../providers/cursos/cursos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista: Curso[];

  constructor(public navCtrl: NavController, public cursoProvider: CursosProvider) {
    this.lista = cursoProvider.all();
  }

  detalhes(item){
    this.navCtrl.push(DetalhePage, {dados: item});
  }

}
