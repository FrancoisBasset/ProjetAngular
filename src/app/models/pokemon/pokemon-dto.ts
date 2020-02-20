import { Ability, Item } from '..';

export class AbilityDTO {
    is_hidden: boolean
    ability: {
        name: Ability
        url: string
    }
    slot: number
}

export class ItemDTO {
    item: {
        name: Item
        url: string
    }
}

export class MoveDTO {
    move: {
        name: string
        url: string
    }
}

export class StatDTO {
    stat: {
        name: 'hp' | 'speed' | 'attack' | 'defense' | 'special-attack' | 'special-defense'
        url: string
    }
    base_stat: number
    effort: number
}

export class PokemonDTO {
    id: number;
    name: string
    base_experience: number
    sprites: {
        back_default: string
        back_female: string
        back_shiny: string
        back_shiny_female: string
        front_default: string
        front_female: string
        front_shiny: string
        front_shiny_female: string
    }
    abilities: AbilityDTO[]
    held_items: ItemDTO[]
    moves: MoveDTO[]
    stats: StatDTO[]
}
