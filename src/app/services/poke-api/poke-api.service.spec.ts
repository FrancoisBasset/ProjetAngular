import { TestBed } from '@angular/core/testing';

import PokeApiService from './poke-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Pokemon } from 'src/app/models';

describe('PokeApiService', () => {
  let service: PokeApiService;
  let httpMock: HttpTestingController;
  let MathRandom: () => number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PokeApiService);
    httpMock = TestBed.get(HttpTestingController);
    MathRandom = Math.random;
    Math.random = () => 0.1;
  });

  it('should get pikachu', () => {
    expect(service).toBeTruthy();

    service.getByKey('pikachu').subscribe((pokemon: Pokemon) => {
      expect(pokemon.name).toBe('Pikachu');
    });

    const req = httpMock.expectOne(`${service.baseURL}/pokemon/pikachu/`);
    expect(req.request.method).toBe('GET');

    req.flush({
      name: "Pikachu"
    });

    httpMock.verify();
  });

  it('should get pokemon with id 1', () => {
    expect(service).toBeTruthy();

    service.getByKey(1).subscribe((pokemon: Pokemon) => {
      expect(pokemon.name).toBe('Pikachu');
    });

    const req = httpMock.expectOne(`${service.baseURL}/pokemon/1/`);
    expect(req.request.method).toBe('GET');

    req.flush({
      id: 1
    });

    httpMock.verify();
  });

  /*it('should get 2 (random) pokemons (10 & 20)', (done) => {
    jest.spyOn(Math, 'random')
      .mockReturnValueOnce(0.1)
      .mockReturnValueOnce(0.2);

    service.getRandomPokemons(2).subscribe((pokemons: Pokemon[]) => {
      expect(pokemons.length).toBe(2);
      expect(pokemons[0].id).toBe(15);
      expect(pokemons[1].id).toBe(30);
      done();
    });

    httpMock.match(`${service.baseURL}/pokemon/15/`);

    httpMock.match(`${service.baseURL}/pokemon/30/`);

  });*/

  afterEach( () => {
    Math.random = MathRandom;
  });
});
