import { Pokemon, Attack } from "../../models";
import AttackService from './attack.service';
import { Pikachu, Ditto } from 'src/pokemons';

describe('AttackServices logic service', () => {
  let pikachu: Pokemon;
  let ditto: Pokemon;
  let eclair: Attack
  let deflagration: Attack
  let attackServices: AttackService;

  beforeEach( () => {
    eclair = new Attack({
      name: 'Eclair',
      basePower: 40
    });
    deflagration = new Attack({
      name: 'Déflagration',
      basePower: 35
    });

    pikachu = Pikachu;
    ditto = Ditto;

    attackServices = new AttackService();
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
