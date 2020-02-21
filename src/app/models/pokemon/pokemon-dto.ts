import { Ability, Item } from '..';

export class PokemonAbilityDTO {
    is_hidden: boolean
    ability: {
        name: Ability
        url: string
    }
    slot: number
}

export class PokemonItemDTO {
    item: {
        name: Item
        url: string
    }
}

export class PokemonMoveDTO {
    move: {
        name: string
        url: string
    }
}

export class PokemonStatDTO {
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
    abilities: PokemonAbilityDTO[]
    held_items: PokemonItemDTO[]
    moves: PokemonMoveDTO[]
    stats: PokemonStatDTO[]
}
