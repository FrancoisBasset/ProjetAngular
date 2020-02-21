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
	public fastest: Pokemon;
	public attacker: Pokemon;
	public target: Pokemon;

    constructor(
		public logService: LogService
    )
    {}

    private demiRound() {
		if (this.fastest == null) {
			this.fastest = this.speedServices.getFastest(this.pokemonA, this.pokemonB);
			if (this.fastest == this.pokemonA) {
				this.attacker = this.pokemonA;
        this.target = this.pokemonB;
			} else {
				this.attacker = this.pokemonB;
        this.target = this.pokemonA;
			}
		} else {
			let tmp = this.attacker;
			this.attacker = this.target;
			this.target = tmp;
		}


        /*let attacker = ( fastest === this.pokemonA  && this.fastestToAttack ? this.pokemonA : this.pokemonB );
		let target = ( attacker === this.pokemonA ? this.pokemonB : this.pokemonA );*/

        let attack = this.attacker.getRandomAttack();
        this.attacker.animate = true;
        let damages = this.attackServices.attack(this.attacker, attack, this.target);
        this.logService.attack(this.attacker, attack.name, this.target, damages);

        if ( this.target.health <= 0 ) {
            this.logService.endOfBattle(this.attacker, this.target);
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

    get endOfBattle() {
      if (this.pokemonA && this.pokemonB) {
        if (this.pokemonA.health <= 0 || this.pokemonB.health <= 0)
          return true
      }
      else
        return false
    }
}
