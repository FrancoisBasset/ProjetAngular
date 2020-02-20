import { Component, OnInit, Input, OnDestroy, ViewChild, AfterViewChecked } from '@angular/core';
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
export class FightComponent implements OnInit, OnDestroy, AfterViewChecked {
  on: boolean = false;
  label: string = 'Start';

  dispLines: string[] = [];

  constructor(private route: ActivatedRoute, public gameService: GameService, private pokeApiService: PokeApiService) { }

  addLine(str: string): void {
	this.dispLines.push(str);
  }

  autoScroll(): void {
    let myDiv = document.getElementById("log");
    myDiv.scrollTop = myDiv.scrollHeight - myDiv.offsetHeight;
  }

  ngOnInit(): void {
	  this.route.queryParams.subscribe(params => {
      this.pokeApiService.getByKey(params.pokemonA).subscribe((p) => { this.gameService.pokemonA = p})
      this.pokeApiService.getByKey(params.pokemonB).subscribe((p) => { this.gameService.pokemonB = p})
    })
	this.gameService.log = '';
  }

  ngAfterViewChecked() {
    this.autoScroll()
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
