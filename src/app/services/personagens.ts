import { Injectable } from '@angular/core';
import { of } from 'rxjs';

interface IPersonagem {
  id: number;
  nome: string;
  imagem: string;
  votos: number;
}


@Injectable({
  providedIn: 'root'
})
export class Personagens {
  

  personagens: IPersonagem[] = [
    {
      id: 113231,
      nome: 'Rick Sanchez',
      imagem: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      votos: 0,
    },
    {
      id: 12312,
      nome: 'Rick Sanchez',
      imagem: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      votos: 0,
    },
    {
      id: 3342342,
      nome: 'Rick Sanchez',
      imagem: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      votos: 0,
    },
    {
      id: 4234234,
      nome: 'Rick Sanchez',
      imagem: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
      votos: 0,
    },
    {
      id: 5234234,
      nome: 'Rick Sanchez',
      imagem: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
      votos: 0,
    },
  ];

  // getPersonagens(){
  //   return of(this.personagens)
  // }
getPersonagens(){
  return this.personagens;
}
}
