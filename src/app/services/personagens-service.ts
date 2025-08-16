import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface IPersonagem {
  id: number;
  nome: string;
  imagem: string;
  votos: number;
}

@Injectable({
  providedIn: 'root',
})


export class PersonagensService {
  constructor(
    private httpCliente: HttpClient
  ){ }
  urlApi = 'http://localhost:3000/personagens'
  private personagens: IPersonagem[] = [
    // {
    //   id: 113231,
    //   nome: 'Rick Sanchez',
    //   imagem: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    //   votos: 0,
    // },
    // {
    //   id: 12312,
    //   nome: 'Rick Sanchez',
    //   imagem: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    //   votos: 0,
    // },
    // {
    //   id: 3342342,
    //   nome: 'Rick Sanchez',
    //   imagem: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    //   votos: 0,
    // },
    // {
    //   id: 4234234,
    //   nome: 'Rick Sanchez',
    //   imagem: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    //   votos: 0,
    // },
    // {
    //   id: 5234234,
    //   nome: 'Rick Sanchez',
    //   imagem: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    //   votos: 0,
    // },
  ];

  getPersonagens(): Observable<any> {
    return this.httpCliente.get(this.urlApi)
  }

  votarPersonagem(id: number) {
    const personagem = this.personagens.find(
      () => personagem.id === id
    );
    personagem!.votos++;
  }

  
  // votarPersonagem(id: number) {
  //   const personagem = this.personagens.find(
  //     (personagem) => personagem.id === id
  //   );
  //   personagem!.votos++;
  // }
}
