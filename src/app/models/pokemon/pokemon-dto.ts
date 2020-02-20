import { Ability, Item } from '..';

export class PokemonDTO {
    id: number;
    name: string
    base_experience: number
    sprites: {
        back_default: string
        front_default: string
    }
    abilities: [
        {
            is_hidden: boolean
            ability: {
                name: Ability
            }
        }
    ];
    held_items: [
        {
            item: {
                name: Item
            }
        }
    ];
    moves: [
        {
            move: {
                name: string
            }
        }
    ];
    stats: [
        {
            stat: {
                name: 'speed'
            }
            base_stat: number
        },
        {
            stat: {
                name: 'hp'
            }
            base_stat: number
        },
        {
            stat: {
                name: 'attack'
            }
            base_stat: number
        },
        {
            stat: {
                name: 'defense'
            }
            base_stat: number
        },
        {
            stat: {
                name: 'special-attack'
            }
            base_stat: number
        },
        {
            stat: {
                name: 'special-defense'
            }
            base_stat: number
        },
    ];
}
