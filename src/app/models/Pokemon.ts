import { Attack, Ability, Item } from '.';
import { randomIntLessThan } from 'src/app/utils/utils'


export default class Pokemon {
    name: string;
    level: number;
    speed: number;
    offStat: number;
    defStat: number;
    specOffStat: number;
    specDefStat: number;
    maxHealth: number;
    attacks: Attack[];
    abilities: Ability[];
    items: Item[];
    color: string;
    frontSpriteUrl: string;
    backSpriteUrl: string;
    health: number;
    paralyzed: boolean;
    basePower: number;

    constructor (data: any)
    {
        this.name = data && data.name;
        this.level = data && data.level;
        this.speed = data && data.speed;
        this.offStat = data && data.offStat;
        this.defStat = data && data.defStat;
        this.specOffStat = data && data.specOffStat;
        this.specDefStat = data && data.specDefStat;
        this.maxHealth = data && data.maxHealth;
        this.attacks = data && data.attacks;
        this.abilities = data && data.abilities;
        this.items = data && data.items;
        this.color = data && data.color;
        this.frontSpriteUrl = data && data.frontSpriteUrl;
        this.backSpriteUrl = data && data.backSpriteUrl;
        this.basePower = data && data.basePower;
        this.health = this.maxHealth;
    }

    // Manque couleur !
    public static fromApi(o: any): Pokemon {
        let abilities = o.abilities
            .filter(a => !a.is_hidden)
            .map(a => a.ability.name);
        let items = o.held_items
            .map(i => i.item.name);
        let attacks = o.moves
            .map(m => m.move.name);
        let speed = o.stats.find( s => s.stat.name === 'speed').base_stat;
        let hp = o.stats.find( s => s.stat.name === 'hp').base_stat;
        let offStat = o.stats.find( s => s.stat.name === 'attack').base_stat;
        let defStat = o.stats.find( s => s.stat.name === 'defense').base_stat;
        let specOffStat = o.stats.find( s => s.stat.name === 'defense').base_stat;
        let specDefStat = o.stats.find( s => s.stat.name === 'defense').base_stat;
        return new Pokemon({
            name: o.name,
            level: 0,
            speed: speed,
            offStat: offStat,
            defStat: defStat,
            specOffStat: specOffStat,
            specDefStat: specDefStat,
            maxHealth: hp,
            attacks,
            abilities,
            items,
            color: '',
            frontSpriteUrl: o.sprites.front_default,
            backSpriteUrl: o.sprites.back_default,
            basePower: o.base_experience
        });

    }

    public loseHealth (dammages: number): void {
        this.health -= dammages;
        if ( this.health < 0 ) {
            this.health = 0
        }
    }

    public getRandomAttack (): Attack {
        return this.attacks[randomIntLessThan(this.attacks.length)]
    }

    public hasItem(item: Item) {
        return this.items.includes(item);
    }

    public hasAbility(ability: Ability) {
        return this.abilities.includes(ability);
    }
}
