import { Component, OnInit } from '@angular/core';
import { Pokemon, Attack } from 'src/logic/models';
import { AttackServices, GameServices } from 'src/logic/services';
import SpeedServices from 'src/logic/services/SpeedServices';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.scss']
})
export class FightComponent implements OnInit {
  pikachu: Pokemon
  ditto: Pokemon
  game: GameServices

  dispLines: string[] = []

  constructor() {
  }

  sleepFor(sleepDuration: number): void {
    let now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration);
  }

  addLine(str: string): void {
    this.dispLines.push(str);
  }

  ngOnInit(): void {
    this.pikachu = new Pokemon(
      'Pikachu',
      70,
      90,
      55,
      40,
      30,
      [
        new Attack('Eclair', 40),
        new Attack('Charge', 5),
        new Attack('Tonnerre', 60),
        new Attack('Rugissement', 1)
      ],
      [],
      []
    )
  
    this.ditto = new Pokemon(
      'Ditto',
      1,
      48,
      48,
      48,
      48,
      [
          new Attack('Charge', 5),
          new Attack('Flammèche', 25),
          new Attack('Lèchouille', 75),
          new Attack('Déflagration', 40)
      ],
      [],
      []
    )
  
    this.game = new GameServices(this.addLine.bind(this), this.pikachu, this.ditto, new AttackServices(), new SpeedServices())
    this.game.play()
  }

}
