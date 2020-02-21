import { Injectable } from '@angular/core';
import { Pokemon } from './models';

@Injectable({
  providedIn: 'root'
})
export class CreationService {
	public newPokemon: Pokemon = new Pokemon();
	public newPokemons: Pokemon[] = [];

  constructor() { }
}
