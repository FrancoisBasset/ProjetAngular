import { Injectable } from '@angular/core';
import { Pokemon } from './models';

@Injectable({
  providedIn: 'root'
})
export class LogService {
	log: Object[] = [];

  constructor() { }

  public attack(attacker: Pokemon, attackName: string, target: Pokemon, damages: number): void {

	  this.log.push({
		  'attackerName': attacker.name,
		  'attackerColor': attacker.color,
		  'attack': attackName,
		  'targetName': target.name,
		  'targetColor': target.color,
		  'targetHealth': target.health,
		  'damages': damages,
		  'end': false
	  });
  }

  public endOfBattle(attacker: Pokemon, target: Pokemon): void {
	  this.log.push({
		'attackerName': attacker.name,
		'attackerColor': attacker.color,
		'targetName': target.name,
		'end': true
	});
  }

  public reinit(): void {
	  this.log = []
  }
}
