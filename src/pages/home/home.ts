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
    // this.lista = cursoProvider.all();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursosPage');

    // let cur: Curso = {
    //   "id": 2,
    //   "titulo": "Ionic Básico",
    //   "descricao": "Lorem ipsum dolor sit ame, consectur adsipiling adensi compi prior.",
    //   "valor": 21.99,
    //   "valor_txt": "R$ 21,99",
    //   "imagem": "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Qo5--bvM7oPS_vil2vLZYAHaD4%26pid%3D15.1&f=1",
    //   "aulas": []
    // };

    // this.cursoProvider.addTeste(cur).subscribe(res => {
    //   console.log(res);
    // }, erro => {
    //   console.log("Errooo: " + erro.message);
    // });

    // this.cursoProvider.editTeste(cur).subscribe(res => {
    //   console.log(res);
    // }, erro => {
    //   console.log("Errooo: " + erro.message);
    // });

    // this.cursoProvider.deleteTeste(cur).subscribe(res => {
    //   console.log(res);
    // }, erro => {
    //   console.log("Errooo: " + erro.message);
    // });

    // this.cursoProvider.showTeste(cur).subscribe(res => {
    //   console.log(res);
    // }, erro => {
    //   console.log("Errooo: " + erro.message);
    // });

  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter CursosPage');

    this.cursoProvider.allTeste().subscribe(res => {
      this.lista = res;
    }, erro => {
      console.log("Errooo: " + erro.message);
    });
  }

  detalhes(item){
    this.navCtrl.push(DetalhePage, {dados: item});
  }

}
