import { TestBed, inject } from '@angular/core/testing';

import PokeApiService from "./pokeapi.service";


describe('PokemonApiService tests', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokeApiService]
    });
  });

  it('should get Pikachu', inject([PokeApiService], (service: PokeApiService) => {
    let result = service.getByName('pikachu');
    console.log(result)
    expect(result).toBeTruthy();
  }));
});
