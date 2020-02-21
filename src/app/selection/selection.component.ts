import { Component, OnInit } from '@angular/core';
import { Pokemon, Item, Attack } from 'src/app/models';
import { Router } from '@angular/router';
import { PokeApiService } from '../services';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreationComponent } from '../creation/creation.component';
import { CreationService } from '../creation.service';

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

  constructor(private router: Router, private pokeApiService: PokeApiService, public dialog: MatDialog, public creationService: CreationService) { }

  ngOnInit(): void {
	  this.pokeApiService.getRandomPokemons(30).subscribe((pokemons) => {
		  this.allPokemons = pokemons
	  })
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

  openCreation(): void {
	const dialogRef = this.dialog.open(CreationComponent, {
		width: '50%',
		height: '50%'
	  });

	  dialogRef.afterClosed().subscribe(r => {
		  var newPokemon = new Pokemon();
		  console.log(newPokemon);
		  newPokemon.name = this.creationService.newPokemon.name;
		  newPokemon.level = this.creationService.newPokemon.level;
		  newPokemon.speed = this.creationService.newPokemon.speed;
		  newPokemon.frontSpriteUrl = this.creationService.newPokemon.frontSpriteUrl;
		  newPokemon.backSpriteUrl = this.creationService.newPokemon.backSpriteUrl;
		  newPokemon.offStat = this.creationService.newPokemon.offStat;
		  newPokemon.defStat = this.creationService.newPokemon.defStat;
		  newPokemon.maxHealth = this.creationService.newPokemon.maxHealth;
		  newPokemon.items = [
			  Item.ClawFossil
		  ];
		  newPokemon.attacks = [
			  new Attack('', 5)
		  ];

		  //console.log(newPokemon.getRandomAttack());
		  
		  this.allPokemons.push(newPokemon);
		  this.creationService.newPokemons.push(newPokemon);
		  this.creationService.newPokemon = new Pokemon();
	  });
  }

}