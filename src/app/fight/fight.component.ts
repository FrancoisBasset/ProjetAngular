import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Pokemon } from 'src/logic/models';
import { AttackServices, GameServices } from 'src/logic/services';
import SpeedServices from 'src/logic/services/SpeedServices';
import { pokemonA, pokemonB } from '../../pokemons';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.scss']
})
export class FightComponent implements OnInit, OnDestroy {
  @Input() pokemonA: Pokemon
  @Input() pokemonB: Pokemon
  game: GameServices
  on: boolean = false;
  label: string = 'Start';

  dispLines: string[] = []

  constructor() { }

  addLine(str: string): void {
	this.dispLines.push(str);
  }

  ngOnInit(): void {
    this.pokemonA = pokemonA;
    this.pokemonB = pokemonB;
  
    this.game = new GameServices(this.addLine.bind(this), this.pokemonA, this.pokemonB, new AttackServices(), new SpeedServices())
  }

  onClick(): void {

    if (this.on) {
	  this.on = false;
	  this.label = 'Start';
	  this.game.pause();
    } else {
      this.on = true;	  
	  this.label = 'Stop';
      this.game.play()
    }
  }

  ngOnDestroy(): void {
    this.game.pause();
  }
}
