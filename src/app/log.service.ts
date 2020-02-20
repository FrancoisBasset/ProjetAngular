import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
	//log: string = '';
	log: string[] = [];

  constructor() { }

  public attack(attacker: string, attackName: string, target: string, damages: number, health: number): void {
	  //this.log += `${attacker} utilise l'attaque ${attackName}\n`;
	  //this.log += `${target} perd ${damages} (${health} PV restants)\n\n`;

	  this.log.push(`${attacker} utilise l'attaque ${attackName}\n`);
	  this.log.push(`${target} perd ${damages} (${health} PV restants)\n\n`);

	  console.log(this.log);
  }

  public endOfBattle(attacker: string, target: string): void {
	  //this.log += `${target} n'a plus de PV\n`;
	  //this.log += `${attacker} remporte le combat`;

	  this.log.push(`${target} n'a plus de PV\n`);
	  this.log.push(`${attacker} remporte le combat`);
  }
}
