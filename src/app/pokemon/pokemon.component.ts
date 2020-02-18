import { Component, OnInit } from '@angular/core';
import { Pokemon, Attack } from 'src/logic/models';

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
      new Pokemon(
        'Pikachu',
        1,
        90,
        55,
        40,
        30,
        [
          new Attack('Eclair', 7)
        ],
        [],
        []
      ),
      new Pokemon(
          'Ditto',
          1,
          48,
          48,
          48,
          48,
          [
            new Attack('Jet de merde', 6),
            new Attack('Éjaculation spatiale', 37),
            new Attack('Chiasse', 24),
            new Attack('Pisse sulfurique', 28),
            new Attack('Cyprine', 19)
          ],
          [],
          []
      )
    ]
  }

}
