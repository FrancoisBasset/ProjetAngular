import { Pokemon, Ability, Item } from ".";
import Attack from './Attack';

describe('Pokemon logic model', () => {
  let pikachu: Pokemon;
  let charge: Attack;
  let MathRandom: () => number;

  beforeEach( () => {
    charge = new Attack('Charge', 5);
    pikachu = new Pokemon({
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
        charge,
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
      backSpriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"
    })

    MathRandom = Math.random;
    Math.random = () => 0.01;
  });

  it('Pikachu should have 20HP after having lost 10HP', () => {
    pikachu.loseHealth(10);
    expect(pikachu.health).toBe(20);
  });

  it('Pikachu should have 0HP after having lost 99HP', () => {
    pikachu.loseHealth(99);
    expect(pikachu.health).toBe(0);
  });

  it('Pikachu get 2nd attack : Charge', () => {
    let attack = pikachu.getRandomAttack();
    expect(attack).toBe(charge);
  });

  afterEach( () => {
      Math.random = MathRandom;
  })
});
