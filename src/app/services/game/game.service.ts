import { Pokemon } from "../../models";
import { AttackService, SpeedService } from "../index";

export default class GameServices {
    intervalId: any;
    fastestToAttack = true;

    constructor(
        public write: (message: string) => void,
        public pokemonA: Pokemon,
        public pokemonB: Pokemon,
        public attackServices: AttackService,
        public speedServices: SpeedService
    )
    {}

    private demiRound() {
        let fastest = this.speedServices.getFastest(this.pokemonA, this.pokemonB)
        let attacker = ( fastest === this.pokemonA  && this.fastestToAttack ? this.pokemonA : this.pokemonB )
        let target = ( attacker === this.pokemonA ? this.pokemonB : this.pokemonA )

        let attack = attacker.getRandomAttack();
        let dammages = this.attackServices.attack(attacker, attack, target)
        this.write(`${attacker.name} utilise l'attaque ${attack.name}`);
        this.write(`${target.name} perd ${dammages} (${target.health} PV restants)`)

        if ( target.health <= 0 ) {
            this.write(`${target.name} n'a plus de PV`)
            this.write(`${attacker.name} remporte le combat`)
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
