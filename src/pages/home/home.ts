import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhePage } from '../detalhe/detalhe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista = [
    {
      id: 1,
      titulo: "Ionic na Prática",
      descricao: "Lorem ipsum dolor sit ame, consectur adsipiling adensi compi prior.",
      valor: 28.90,
      valor_txt: "R$ 28,90",
      imagem: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Qo5--bvM7oPS_vil2vLZYAHaD4%26pid%3D15.1&f=1"
    },
    {
      id: 2,
      titulo: "Mestre no JS",
      descricao: "Lorem ipsum dolor sit ame, consectur adsipiling adensi compi prior.",
      valor: 57.99,
      valor_txt: "R$ 57,99",
      imagem: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zWhOGf_PgX0nRTLZLmFpGgHaEK%26pid%3D15.1&f=1"
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  detalhes(){
    this.navCtrl.push(DetalhePage, {dados: "OK!"});
  }

}
