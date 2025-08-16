import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardPersonagem } from '../card-personagem/card-personagem';
import { PersonagensService } from '../../services/personagens-service';

interface IPersonagem {
  id: number;
  nome: string;
  imagem: string;
  votos: number;
}

@Component({
  selector: 'app-lista-personagem',
  imports: [CardPersonagem,],
  templateUrl: './lista-personagem.html',
  styleUrl: './lista-personagem.css',
})
export class ListaPersonagem implements OnInit, OnDestroy{
  personagens: IPersonagem[] = [];

  constructor(private personagemService: PersonagensService) {}
  

  ngOnInit() {
    console.log('OnInit')

    // this.personagens = this.personagemService.getPersonagens();
    this.personagemService.getPersonagens().subscribe(
      personagens =>{
        this.personagens = personagens;
      }
    )
  }

  incremetarVotoPersonagem(id: number) {
    this.personagemService.votarPersonagem(id);
  }

  ngOnDestroy(){
    console.log('Destroi')
    throw new Error('Method not implemented.');
    
  }
}
