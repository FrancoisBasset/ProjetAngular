import { Pokemon } from "../models";
import AttackServices from "./AttackServices";
import SpeedServices from './SpeedServices';

export default class GameServices {

    constructor(
        public write: (message: string) => void,
        public a: Pokemon,
        public b: Pokemon,
        public attackServices: AttackServices,
        public speedServices: SpeedServices
    )
    {}

    public play () {
        let fastestToAttack = true;
        let intervalId = setInterval( () => {
            let fastest = this.speedServices.getFastest(this.a, this.b)
            let attacker = ( fastest === this.a  && fastestToAttack ? this.a : this.b )
            let target = ( attacker === this.a ? this.b : this.a )

            let attack = attacker.getRandomAttack();
            let dammages = this.attackServices.attack(attacker, attack, target)
            this.write(`${attacker.name} utilise l'attaque ${attack.name}`);
            this.write(`${target.name} perd ${dammages} (${target.health} PV restants)`)

            if ( target.health <= 0 ) {
                this.write(`${target.name} n'a plus de PV`)
                this.write(`${attacker.name} remporte le combat`)
                clearInterval(intervalId);
                return
            }

            fastestToAttack = !fastestToAttack;
        }, 1000);
    }
}
