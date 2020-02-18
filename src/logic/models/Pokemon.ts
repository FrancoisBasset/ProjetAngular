import { Attack, Ability, Item } from '.';

export default class Pokemon {
    health: number
    paralyzed = false

    constructor (
        public name: string,
        public level: number,
        public speed: number,
        public offensiveStat: number,
        public defensiveStat: number,
        public maxHealth: number,
        public attacks: Attack[],
        public abilities: Ability[],
        public items: Item[]
    )
    {
        this.health = maxHealth
    }

    public loseHealth (dammages: number): void {
        this.health -= dammages;
        if ( this.health < 0 ) {
            this.health = 0
        }
    }

    public getRandomAttack (): Attack {
        return this.attacks[Math.floor(Math.random() * 100) % this.attacks.length]
    }

    public hasItem(item: Item) {
        return this.items.includes(item);
    }

    public hasAbility(ability: Ability) {
        return this.abilities.includes(ability);
    }
}
