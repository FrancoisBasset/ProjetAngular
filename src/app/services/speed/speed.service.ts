import { Pokemon, Ability, Item } from "src/app/models";

export default class SpeedService {
    slowItems = [
        Item.IronBall,
        Item.MachoBrace,
        Item.PowerBracer,
        Item.PowerBelt,
        Item.PowerLens,
        Item.PowerBand,
        Item.PowerAnklet,
        Item.PowerWeight
    ]

    public getCalculatedSpeed(pokemon: Pokemon): number {
        let speed = pokemon.speed;
        if ( pokemon.hasItem(Item.ChoiceScarf) ) {
			speed *= 1.5;
        }
        if ( pokemon.hasItem(Item.QuickPowder) ) {
			speed *= 2;
        }
        if ( pokemon.paralyzed && !(pokemon.hasAbility(Ability.QuickFeet)) ) {
			speed /= 2;
        }

        for ( const _ of this.slowItems.filter(i => pokemon.hasItem(i)) ) {
            speed /= 2;
        }
        return speed;
    }

    public getFastest(a: Pokemon, b: Pokemon): Pokemon {
        let speedA = this.getCalculatedSpeed(a)
        let speedB = this.getCalculatedSpeed(b)
        if ( speedA === speedB ) {
            return Math.random() < 0.5 ? a : b
        }
        return speedA > speedB ? a : b;
    }
}
