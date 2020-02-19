import { Pokemon, Item } from "src/app/models";
import SpeedService from './speed.service';
import { Pikachu, Ditto } from 'src/pokemons';

describe('SpeedServices logic service', () => {
  let pikachu: Pokemon;
  let ditto: Pokemon;
  let speedServices: SpeedService;

  beforeEach( () => {
    pikachu = Pikachu;
    ditto = Ditto;

    speedServices = new SpeedService();
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
