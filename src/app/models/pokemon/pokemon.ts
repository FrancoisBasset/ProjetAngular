import { Ability } from '../Ability';
import { Attack } from '../attack/attack';
import { Item } from '../Item';
import { randomIntLessThan } from 'src/app/utils/utils'
import { PokemonInterface } from './pokemon-interface';
import { PokemonDTO } from './pokemon-dto';

export class Pokemon {
    id: number;
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
    test: boolean;

    constructor (i?: PokemonInterface)
    {
        this.id = i && i.id;
        this.name = i && i.name;
        this.level = i && i.level;
        this.speed = i && i.speed;
        this.offStat = i && i.offStat;
        this.defStat = i && i.defStat;
        this.specOffStat = i && i.specOffStat;
        this.specDefStat = i && i.specDefStat;
        this.maxHealth = i && i.maxHealth;
        this.attacks = i && i.attacks;
        this.abilities = i && i.abilities;
        this.items = i && i.items;
        this.color = i && i.color;
        this.frontSpriteUrl = i && i.frontSpriteUrl;
        this.backSpriteUrl = i && i.backSpriteUrl;
        this.basePower = i && i.basePower;
        this.health = this.maxHealth;
        this.test = false;
    }

    // Manque couleur !
    public static fromDto(dto: PokemonDTO): Pokemon {
        let abilities = dto.abilities
            .filter(a => !a.is_hidden)
            .map(a => a.ability.name);
        let items = dto.held_items
            .map(i => i.item.name);
        let attacks = dto.moves
            .slice(0, 8) // on garde seulement 4 attaques après ; on en prend ici 8 au cas où certaines ont une puissance à null
            .map(m => new Attack({
                name: m.move.name,
                url: m.move.url,
                basePower: 1 // par défaut, défini après
            }));
        let speed = dto.stats.find( s => s.stat.name === 'speed').base_stat;
        let hp = dto.stats.find( s => s.stat.name === 'hp').base_stat;
        let offStat = dto.stats.find( s => s.stat.name === 'attack').base_stat;
        let defStat = dto.stats.find( s => s.stat.name === 'defense').base_stat;
        let specOffStat = dto.stats.find( s => s.stat.name === 'special-attack').base_stat;
        let specDefStat = dto.stats.find( s => s.stat.name === 'special-defense').base_stat;
        return new Pokemon({
            id: dto.id,
            name: dto.name,
            level: 10,
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
            frontSpriteUrl: dto.sprites.front_default,
            backSpriteUrl: dto.sprites.back_default,
            test: false
        });

    }

    public loseHealth (dammages: number): void {
        this.health -= dammages;
        if ( this.health < 0 ) {
            this.health = 0
        }
    }

    public reinit (pokemon: Pokemon): Pokemon {
        let newPokemon: Pokemon;
        Object.assign(newPokemon, pokemon);
        newPokemon.health = pokemon.maxHealth;
        return newPokemon;
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
