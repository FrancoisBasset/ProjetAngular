import { Injectable } from '@angular/core';
import { Pokemon } from './models';

@Injectable({
  providedIn: 'root'
})
export class LogService {
	//log: string = '';
	log: Object[] = [];

  constructor() { }

  public attack(attacker: Pokemon, attackName: string, target: Pokemon, damages: number): void {
	  //this.log += `${attacker} utilise l'attaque ${attackName}\n`;
	  //this.log += `${target} perd ${damages} (${health} PV restants)\n\n`;

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

	  //console.log(this.log);
  }

  public endOfBattle(attacker: Pokemon, target: Pokemon): void {
	  //this.log += `${target} n'a plus de PV\n`;
	  //this.log += `${attacker} remporte le combat`;

	  /*this.log.push(`${target} n'a plus de PV\n`);
	  this.log.push(`${attacker} remporte le combat`);*/

	  this.log.push({
		'attacker': attacker,
		'target': target,
		'end': true
	});
  }
}
