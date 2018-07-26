import { Aula } from "./Aula";

export interface Curso{
  id?: number,
  titulo: string,
  descricao: string,
  valor: number,
  valor_txt: string,
  imagem: string,
  aulas: Aula[]
}
