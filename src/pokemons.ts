import { Pokemon, Attack, Ability, Item } from 'src/app/models';

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
		new Attack({
			name: 'Eclair',
			basePower: 40
		}),
		new Attack({
			name: 'Charge',
			basePower: 20
		}),
		new Attack({
			name: 'Tonnerre',
			basePower: 60
		}),
		new Attack({
			name: 'Rugissement',
			basePower: 1
		})
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
		new Attack({
			name: 'Charge',
			basePower: 5
		}),
		new Attack({
			name: 'Flammèche',
			basePower: 25
		}),
		new Attack({
			name: 'Lèchouille',
			basePower: 75
		}),
		new Attack({
			name: 'Déflagration',
			basePower: 40
		})
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