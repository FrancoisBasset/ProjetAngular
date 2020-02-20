import { Pokemon } from "../../models";
import AttackService from "../attack/attack.service";
import SpeedService from "../speed/speed.service";
import { Injectable } from '@angular/core';
import { LogComponent } from 'src/app/log/log.component';

@Injectable({
  providedIn: 'root'
})

export default class GameService {
    intervalId: any;
	fastestToAttack = true;
	public pokemonA: Pokemon;
    public pokemonB: Pokemon;
    public attackServices: AttackService = new AttackService();
	public speedServices: SpeedService =new SpeedService();
	public log: string = '';

    constructor(
        //public write: (message: string) => void,
        
    )
    {}

    private demiRound() {
		//var log = {};

        let fastest = this.speedServices.getFastest(this.pokemonA, this.pokemonB)
        let attacker = ( fastest === this.pokemonA  && this.fastestToAttack ? this.pokemonA : this.pokemonB )
		let target = ( attacker === this.pokemonA ? this.pokemonB : this.pokemonA )
		
		/*log["attacker"] = attacker;
		log["target"] = target;
		log["da"]*/

        let attack = attacker.getRandomAttack();
        let dammages = this.attackServices.attack(attacker, attack, target);
        this.log += `${attacker.name} utilise l'attaque ${attack.name}\n`;
        this.log += `${target.name} perd ${dammages} (${target.health} PV restants)\n\n`;

        if ( target.health <= 0 ) {
            this.log += `${target.name} n'a plus de PV\n`;
            this.log += `${attacker.name} remporte le combat`;
            clearInterval(this.intervalId);
        }

        this.fastestToAttack = !this.fastestToAttack;
    }

    public play () {
		//this.log = 'okok';
        this.intervalId = setInterval(this.demiRound.bind(this), 1000);
    }

    public pause () {
        clearInterval(this.intervalId);
    }
}