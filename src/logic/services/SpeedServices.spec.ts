import { Pokemon, Attack, Item } from "../models";
import SpeedServices from './SpeedServices';

describe('SpeedServices logic service', () => {
  let pikachu: Pokemon;
  let ditto: Pokemon;
  let speedServices: SpeedServices;

  beforeEach( () => {
    pikachu = new Pokemon(
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
      []
    )
    
    ditto = new Pokemon(
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
      []
    )

    speedServices = new SpeedServices();
  })

  it('Calculated speed of Pikachu should be 270', () => {
    pikachu.items = [
      Item.ChoiceScarf,
      Item.QuickPowder
    ]
    let speed = speedServices.getCalculatedSpeed(pikachu);
    expect(speed).toBe(270);
  });

  it('Calculated speed of Pikachu should be 22.5', () => {
    pikachu.paralyzed = true;
    pikachu.items = [
      Item.IronBall
    ]
    let speed = speedServices.getCalculatedSpeed(pikachu);
    expect(speed).toBe(22.5);
  });

  it('Calculated speed of Pikachu should be 45', () => {
    pikachu.paralyzed = true;
    pikachu.items = [
      Item.IronBall,
      Item.QuickPowder
    ]
    let speed = speedServices.getCalculatedSpeed(pikachu);
    expect(speed).toBe(45);
  });

  it('Pikachu should should be faster than Ditto (without item)', () => {
    let fastest = speedServices.getFastest(pikachu, ditto);
    expect(fastest).toBe(pikachu);
  });

  it('Ditto with speed items should be faster than Pikachu', () => {
    ditto.items = [
      Item.QuickPowder
    ]
    let fastest = speedServices.getFastest(pikachu, ditto);
    expect(fastest).toBe(ditto);
  });

  it('Pikachu paralized should be slower than Ditto', () => {
    pikachu.paralyzed = true
    let fastest = speedServices.getFastest(pikachu, ditto);
    expect(fastest).toBe(ditto);
  });
});
