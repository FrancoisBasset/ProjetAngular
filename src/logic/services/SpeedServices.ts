import { Pokemon, Ability, Item } from "../models";

export default class SpeedServices {
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

    private getCalculatedSpeed(pokemon: Pokemon): number {
        let speed = pokemon.speed;
        if ( Item.ChoiceScarf in pokemon.items ) {
			speed *= 1.5;
        }
        if ( Item.QuickPowder in pokemon.items ) {
			speed *= 2;
        }
        if ( pokemon.paralyzed && !(Ability.QuickFeet in pokemon.abilities) ) {
			speed /= 2;
        }
        const nbSlowItems = this.slowItems.filter(i => i in pokemon.items).length
        if ( nbSlowItems ) {
            speed /= nbSlowItems * 2;
        }
        if ( Item.QuickPowder in pokemon.items ) {
			speed *= 2;
		}
        return speed;
    }

    public  getFastest(a: Pokemon, b: Pokemon) {
        let speedA = this.getCalculatedSpeed(a)
        let speedB = this.getCalculatedSpeed(b)
        if ( speedA === speedB ) {
            return Math.random() < 0.5 ? a : b
        }
        return speedA > speedB ? a : b;
    }
}
