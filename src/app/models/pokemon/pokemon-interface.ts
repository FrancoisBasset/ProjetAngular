import { Attack, Ability, Item } from '..';

export class PokemonInterface {
    id?: number;
    name?: string;
    level?: number;
    speed?: number;
    offStat?: number;
    defStat?: number;
    specOffStat?: number;
    specDefStat?: number;
    maxHealth?: number;
    attacks?: Attack[];
    abilities?: Ability[];
    items?: Item[];
    color?: string;
    frontSpriteUrl?: string;
    backSpriteUrl?: string;
    health?: number;
    paralyzed?: boolean;
    basePower?: number;
    animate?: boolean;
}
