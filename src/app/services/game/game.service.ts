import { Pokemon } from "../../models";
import AttackService from "../attack/attack.service";
import SpeedService from "../speed/speed.service";
import { Injectable } from '@angular/core';
import { LogService } from '../../log.service';

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

    constructor(
		public logService: LogService
    )
    {}

    private demiRound() {
        let fastest = this.speedServices.getFastest(this.pokemonA, this.pokemonB);
        let attacker = ( fastest === this.pokemonA  && this.fastestToAttack ? this.pokemonA : this.pokemonB );
		let target = ( attacker === this.pokemonA ? this.pokemonB : this.pokemonA );

        let attack = attacker.getRandomAttack();
        let damages = this.attackServices.attack(attacker, attack, target);
        this.logService.attack(attacker.name, attack.name, target.name, damages, target.health);

        if ( target.health <= 0 ) {
            this.logService.endOfBattle(attacker.name, target.name);
            clearInterval(this.intervalId);
        }

        this.fastestToAttack = !this.fastestToAttack;
    }

    public play () {
        this.intervalId = setInterval(this.demiRound.bind(this), 1000);
    }

    public pause () {
		clearInterval(this.intervalId);
    }
}
