import { Pokemon, Attack } from "../models";
import AttackServices from './AttackServices';

describe('AttackServices logic service', () => {
  let pikachu: Pokemon;
  let ditto: Pokemon;
  let eclair: Attack
  let deflagration: Attack
  let attackServices: AttackServices;

  beforeEach( () => {
    eclair = new Attack('Eclair', 40)
    deflagration = new Attack('Déflagration', 35)

    pikachu = new Pokemon(
      'Pikachu',
      70,
      90,
      55,
      40,
      30,
      [
        eclair,
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
        deflagration
      ],
      [],
      []
    )

    attackServices = new AttackServices();
  })

  it('Calculated dammages of Pikachu Eclair should be 29', () => {
    let dammages = attackServices.calculateAttackDammages(pikachu, eclair, ditto)
    expect(dammages).toBe(29)
  });

  it('Calculated dammages of Ditto Déflagration should be 3', () => {
    let dammages = attackServices.calculateAttackDammages(ditto, deflagration, pikachu)
    expect(dammages).toBe(3)
  });

  it('After attack, Ditto should have 19HP', () => {
    let _ = attackServices.attack(pikachu, eclair, ditto)
    expect(ditto.health).toBe(19)
  });

  it('Attack should return 29 (damages)', () => {
    let dammages = attackServices.attack(pikachu, eclair, ditto)
    expect(dammages).toBe(29)
  });
});
