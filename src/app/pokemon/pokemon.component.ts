import { Component, OnInit } from '@angular/core';
import { Pokemon, Attack } from 'src/logic/models';
import { pokemonA, pokemonB } from '../../pokemons';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemons: Pokemon[]

  constructor() { }

  ngOnInit(): void {
    this.pokemons = [
		pokemonA,
		pokemonB
    ];
  }

}
