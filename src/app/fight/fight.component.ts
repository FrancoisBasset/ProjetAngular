import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GameService } from 'src/app/services';
import { AllPokemons } from '../../pokemons';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.scss']
})
export class FightComponent implements OnInit, OnDestroy {
  on: boolean = false;
  label: string = 'Start';

  constructor(private route: ActivatedRoute, public gameService: GameService, private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
	this.route.queryParams.subscribe(params => {
    this.pokeApiService.getByKey(params.pokemonA).subscribe((p) => { this.gameService.pokemonA = p})
    this.pokeApiService.getByKey(params.pokemonB).subscribe((p) => { this.gameService.pokemonB = p})
		//this.gameService.pokemonA = AllPokemons[params.pokemonA];
		//this.gameService.pokemonB = AllPokemons[params.pokemonB];
	});
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
