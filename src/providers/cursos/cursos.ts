import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Curso } from '../../interfaces/Curso';

/*
  Generated class for the CursosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CursosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CursosProvider Provider');
  }

  all(){
    const lista: Curso[] = [
      {
        id: 1,
        titulo: "Laravel 5.5",
        descricao: "Lorem ipsum dolor sit ame, consectur adsipiling adensi compi prior.",
        valor: 28.90,
        valor_txt: "R$ 28,90",
        imagem: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.scotch.io%2F28644%2FWHpGscXqSlGtWdzCxpCE_laravel-simple-leader.png.jpg&f=1",
        aulas: [
          {
            id: 1,
            ordem: 1,
            titulo: "Apresentação do Curso",
            tempo: "4:00",
            video: "https://www.youtube.com/embed/MuDpUnMEHGE",
          },
          {
            id: 2,
            ordem: 2,
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

    return lista;
  }

  allTeste(){
    return this.http.get<Curso[]>("localhost:81/asdasd");
  }

  addTeste(curso: Curso){
    return this.http.post<Curso>("localhost:81/asdasd",curso);
  }

  editTeste(curso: Curso){
    return this.http.put<Curso>("localhost:81/asdasd/"+curso.id,curso);
  }

}
