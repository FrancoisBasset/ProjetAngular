import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/logic/models';
import { AllPokemons } from '../../pokemons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {
	allPokemons: Pokemon[];
	pokemonA: Pokemon;
	pokemonB: Pokemon;
	//nbSelection: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
	  this.allPokemons = Object.values(AllPokemons);
  }

  onPokemonClick(pokemon: Pokemon): void {
	  if (this.pokemonA == null && this.pokemonB == null) {
		  //console.log('A: ' + pokemon.name);
		  this.pokemonA = pokemon;
	  } else if (this.pokemonA != null && this.pokemonA.name == pokemon.name) {
		  //console.log('A: null');
		  this.pokemonA = null;
		} else if (this.pokemonA != null && this.pokemonB == null) {
		  //console.log('B: ' + pokemon.name);
		  this.pokemonB = pokemon;		  
	  }  else if (this.pokemonB.name == pokemon.name) {
		  //console.log('B: Null');
		  this.pokemonB = null;
		} else if (this.pokemonB != null && this.pokemonA == null) {
			this.pokemonA = pokemon;
		}
  }

  selectedPokemon(pokemon: Pokemon): boolean {
	  if (this.pokemonA == pokemon || this.pokemonB == pokemon) {
		  return true;
	  }

	  return false;
  }

  clickBattle(): void {
	  if (this.pokemonA != null && this.pokemonB != null) {
		  this.router.navigate(['/fight'], { queryParams: { pokemonA: this.pokemonA.name, pokemonB: this.pokemonB.name}});
	  }
  }

}