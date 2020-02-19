import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Pokemon } from 'src/app/models';
import { AttackService, GameService, SpeedService } from 'src/app/services';
import { Pikachu, Ditto, Dracaufeu, Carapuce, Bulbizarre } from '../../pokemons';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.scss']
})
export class FightComponent implements OnInit, OnDestroy {
  @Input() pokemonA: Pokemon
  @Input() pokemonB: Pokemon
  game: GameService
  on: boolean = false;
  label: string = 'Start';

  dispLines: string[] = []

  constructor() { }

  addLine(str: string): void {
	this.dispLines.push(str);
  }

  ngOnInit(): void {
    this.pokemonA = Dracaufeu;
    this.pokemonB = Bulbizarre;
  
    this.game = new GameService(this.addLine.bind(this), this.pokemonA, this.pokemonB, new AttackService(), new SpeedService())
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
