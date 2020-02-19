import { TestBed, async, inject } from '@angular/core/testing';

import PokeApiService from "./PokeApi.service";


describe('PokemonApiService tests', () => {
  let api: PokeApiService = new PokeApiService();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokeapiServiceService]
    });
  });

  it('Should return Pikachu', () => {
    pikachu.loseHealth(10);
    expect(pikachu.health).toBe(20);
  });
});


describe('PokeapiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokeapiServiceService]
    });
  });

  it('should ...', inject([PokeapiServiceService], (service: PokeapiServiceService) => {
    expect(service).toBeTruthy();
  }));
});