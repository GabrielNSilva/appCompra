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
      titulo: "Laravel 5.5",
      descricao: "Lorem ipsum dolor sit ame, consectur adsipiling adensi compi prior.",
      valor: 28.90,
      valor_txt: "R$ 28,90",
      imagem: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.scotch.io%2F28644%2FWHpGscXqSlGtWdzCxpCE_laravel-simple-leader.png.jpg&f=1",
      aulas: [
        {
          id: "1",
          ordem: "1",
          titulo: "Apresentação do Curso",
          tempo: "4:00",
          video: "https://www.youtube.com/embed/MuDpUnMEHGE",
        },
        {
          id: "2",
          ordem: "2",
          titulo: "Ferramentas",
          tempo: "2:29",
          video: "https://www.youtube.com/embed/HODJOudXcE4",
        },
      ],
    },
    {
      id: 2,
      titulo: "Ionic na Prática",
      descricao: "Lorem ipsum dolor sit ame, consectur adsipiling adensi compi prior.",
      valor: 21.99,
      valor_txt: "R$ 21,99",
      imagem: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Qo5--bvM7oPS_vil2vLZYAHaD4%26pid%3D15.1&f=1",
      aulas: [],
    },
    {
      id: 3,
      titulo: "Mestre no JS",
      descricao: "Lorem ipsum dolor sit ame, consectur adsipiling adensi compi prior.",
      valor: 57.99,
      valor_txt: "R$ 57,99",
      imagem: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zWhOGf_PgX0nRTLZLmFpGgHaEK%26pid%3D15.1&f=1",
      aulas: [],
    },
  ];

  constructor(public navCtrl: NavController) {

  }

  detalhes(item){
    this.navCtrl.push(DetalhePage, {dados: item});
  }

}
