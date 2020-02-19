import { Pokemon, Attack } from './logic/models';

export var Pikachu = new Pokemon('Pikachu', 70, 90, 55, 40, 30, [
	new Attack('Eclair', 40),
	new Attack('Charge', 5),
	new Attack('Tonnerre', 60),
	new Attack('Rugissement', 1)
], [], [], 'yellow');

export var Ditto = new Pokemon('Ditto', 1, 48, 48, 48, 48, [
	new Attack('Charge', 5),
	new Attack('Flammèche', 25),
	new Attack('Lèchouille', 75),
	new Attack('Déflagration', 40)
], [], [], 'purple');

export var Dracaufeu = new Pokemon('Dracaufeu', 1, 48, 48, 48, 48, [
	new Attack('Charge', 5),
	new Attack('Flammèche', 25),
	new Attack('Lèchouille', 75),
	new Attack('Déflagration', 40)
], [], [], 'purple');

export var Carapuce = new Pokemon('Carapuce', 1, 48, 48, 48, 48, [
	new Attack('Charge', 5),
	new Attack('Flammèche', 25),
	new Attack('Lèchouille', 75),
	new Attack('Déflagration', 40)
], [], [], 'purple');

export var Bulbizarre = new Pokemon('Bulbizarre', 1, 48, 48, 48, 48, [
	new Attack('Charge', 5),
	new Attack('Flammèche', 25),
	new Attack('Lèchouille', 75),
	new Attack('Déflagration', 40)
], [], [], 'purple');

export var AllPokemons = [
	Pikachu,
	Ditto,
	Dracaufeu,
	Carapuce,
	Bulbizarre
];