import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pokemon } from 'src/app/models';
import { GameService, PokeApiService } from 'src/app/services';
import { Pikachu, Ditto } from '../../pokemons';
import { LogComponent } from '../log/log.component';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.scss']
})
export class FightComponent implements OnInit, OnDestroy {
  //@Input() pokemonA: Pokemon
  //@Input() pokemonB: Pokemon
  //game: GameService
  on: boolean = false;
  label: string = 'Start';

  dispLines: string[] = [];

  constructor(private route: ActivatedRoute, public gameService: GameService, private pokeApiService: PokeApiService) { }

  addLine(str: string): void {
	this.dispLines.push(str);
  }

  ngOnInit(): void {
	this.route.queryParams.subscribe(params => {
    this.pokeApiService.getByKey(params.pokemonA).subscribe((p) => { this.gameService.pokemonA = p})
    this.pokeApiService.getByKey(params.pokemonB).subscribe((p) => { this.gameService.pokemonB = p})
		//this.gameService.pokemonA = AllPokemons[params.pokemonA];
		//this.gameService.pokemonB = AllPokemons[params.pokemonB];
	});
	
	this.gameService.log = '';

	//this.gameService.pokemonA = this.pokemonA;
	//this.gameService.pokemonB = this.pokemonB;

    //this.game = new GameService(this.addLine.bind(this), this.pokemonA, this.pokemonB, new AttackService(), new SpeedService());
  }

  onClick(): void {
    if (this.on) {
	  this.on = false;
	  this.label = 'Start';
	  this.gameService.pause();
    } else {
      this.on = true;	  
	  this.label = 'Stop';
      this.gameService.play();
    }
  }

  ngOnDestroy(): void {
    this.gameService.pause();
  }
}
