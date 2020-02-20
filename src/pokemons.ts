import { Pokemon, Attack, Ability, Item } from 'src/app/models';
import PokeApiService from './app/services/poke-api/poke-api.service'

export var Pikachu = new Pokemon({
	name: 'Pikachu',
	level: 70,
	speed: 90,
	offStat: 55,
	defStat: 40,
	specOffStat: 75,
	specDefStat: 50,
	maxHealth: 30,
	attacks: [
		new Attack('Eclair', 40),
		new Attack('Charge', 20),
		new Attack('Tonnerre', 60),
		new Attack('Rugissement', 1)
	],
	abilities: [
		Ability.Tailwind
	],
	items: [
		Item.MachoBrace
	],
	color: 'yellow',
	frontSpriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
	backSpriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
	basePower: 112
})

export var Ditto = new Pokemon({
	name: 'Ditto',
	level: 1,
	speed: 48,
	offStat: 48,
	defStat: 48,
	specOffStat: 48,
	specDefStat: 48,
	maxHealth: 48,
	attacks: [
		new Attack('Charge', 5),
		new Attack('Flammèche', 25),
		new Attack('Lèchouille', 75),
		new Attack('Déflagration', 40)
	],
	abilities: [
		Ability.SandRush
	],
	items: [
		Item.PowerLens
	],
	color: 'purple',
	frontSpriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
	backSpriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
	basePower: 108
});

/*export var Dracaufeu = new Pokemon({
	name: 'Dracaufeu',
	level: 1,
	speed: 48,
	offStat: 48,
	defStat: 48,
	specOffStat: 48,
	specDefStat: 48,
	maxHealth: 48,
	attacks: [
		new Attack('Charge', 5),
		new Attack('Flammèche', 25),
		new Attack('Lèchouille', 75),
		new Attack('Déflagration', 40)
	],
	abilities: [
		Ability.SandRush
	],
	items: [
		Item.PowerLens
	],
	color: 'purple',
	frontSpriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
	backSpriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
	basePower: 108
});

export var Carapuce = new Pokemon({
	name: 'Carapuce',
	level: 1,
	speed: 48,
	offStat: 48,
	defStat: 48,
	specOffStat: 48,
	specDefStat: 48,
	maxHealth: 48,
	attacks: [
		new Attack('Charge', 5),
		new Attack('Flammèche', 25),
		new Attack('Lèchouille', 75),
		new Attack('Déflagration', 40)
	],
	abilities: [
		Ability.SandRush
	],
	items: [
		Item.PowerLens
	],
	color: 'purple',
	frontSpriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
	backSpriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
	basePower: 108
});

export var Bulbizarre = new Pokemon({
	name: 'Bulbizarre',
	level: 1,
	speed: 48,
	offStat: 48,
	defStat: 48,
	specOffStat: 48,
	specDefStat: 48,
	maxHealth: 48,
	attacks: [
		new Attack('Charge', 5),
		new Attack('Flammèche', 25),
		new Attack('Lèchouille', 75),
		new Attack('Déflagration', 40)
	],
	abilities: [
		Ability.SandRush
	],
	items: [
		Item.PowerLens
	],
	color: 'purple',
	frontSpriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
	backSpriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
	basePower: 108
});*/
