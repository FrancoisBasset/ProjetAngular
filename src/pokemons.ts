import { Pokemon, Attack } from './logic/models';

export var pokemonA = new Pokemon(
	'Pikachu',
	70,
	90,
	55,
	40,
	30,
	[
	  new Attack('Eclair', 40),
	  new Attack('Charge', 5),
	  new Attack('Tonnerre', 60),
	  new Attack('Rugissement', 1)
	],
	[],
	[],
	'yellow'
);

export var pokemonB = new Pokemon(
	'Ditto',
	1,
	48,
	48,
	48,
	48,
	[
		new Attack('Charge', 5),
		new Attack('Flammèche', 25),
		new Attack('Lèchouille', 75),
		new Attack('Déflagration', 40)
	],
	[],
	[],
	'purple'
  );