import { TestBed } from '@angular/core/testing';

import PokeApiService from './poke-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Pokemon, PokemonDTO, Ability, Item } from 'src/app/models';

describe('PokeApiService', () => {
  let service: PokeApiService;
  let httpMock: HttpTestingController;
  let MathRandom: () => number;
  //let pikachuFromApi: PokemonDTO;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PokeApiService);
    httpMock = TestBed.get(HttpTestingController);
    MathRandom = Math.random;
    Math.random = () => 0.1;
    /*pikachuFromApi = {
      "abilities": [{
          "ability": {
              "name": Ability["lightning-rod"],
              "url": "https://pokeapi.co/api/v2/ability/31/"
          },
          "is_hidden": true,
          "slot": 3
      }, {
          "ability": {
              "name": Ability["static"],
              "url": "https://pokeapi.co/api/v2/ability/9/"
          },
          "is_hidden": false,
          "slot": 1
      }],
      "base_experience": 112,
      "held_items": [{
          "item": {
              "name": Item["oran-berry"],
              "url": "https://pokeapi.co/api/v2/item/132/"
          }
      }, {
          "item": {
              "name": Item["light-ball"],
              "url": "https://pokeapi.co/api/v2/item/213/"
          }
        }
      ],
      "id": 25,
      "moves": [{
          "move": {
              "name": "mega-punch",
              "url": "https://pokeapi.co/api/v2/move/5/"
          }
      }],
      "name": "pikachu",
      "sprites": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
          "back_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png",
          "back_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
          "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
          "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png"
      },
      "stats": [{
          "base_stat": 90,
          "effort": 2,
          "stat": {
              "name": "speed",
              "url": "https://pokeapi.co/api/v2/stat/6/"
          }
      }, {
          "base_stat": 50,
          "effort": 0,
          "stat": {
              "name": "special-defense",
              "url": "https://pokeapi.co/api/v2/stat/5/"
          }
      }, {
          "base_stat": 50,
          "effort": 0,
          "stat": {
              "name": "special-attack ",
              "url": "https://pokeapi.co/api/v2/stat/4/"
          }
      }, {
          "base_stat": 40,
          "effort": 0,
          "stat": {
              "name": "defense",
              "url": "https://pokeapi.co/api/v2/stat/3/"
          }
      }, {
          "base_stat": 55,
          "effort": 0,
          "stat": {
              "name": "attack ",
              "url": "https://pokeapi.co/api/v2/stat/2/"
          }
      }, {
          "base_stat": 35,
          "effort": 0,
          "stat": {
              "name": "hp",
              "url": "https://pokeapi.co/api/v2/stat/1/"
          }
      }]
    }*/
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

  /*it('should get 2 (random) pokemons (15 & 30)', async(done) => {
    jest.spyOn(Math, 'random')
      .mockReturnValueOnce(0.1)
      .mockReturnValueOnce(0.2);

    service.getRandomPokemons(2).subscribe((pokemons: Pokemon[]) => {
      expect(pokemons.length).toBe(2);
      expect(pokemons[0]).toBe(pikachuFromApi);
      expect(pokemons[1]).toBe(pikachuFromApi);
      done();
    });

    httpMock.expectOne(`${service.baseURL}/pokemon/15/`).flush(pikachuFromApi);

    httpMock.expectOne(`${service.baseURL}/pokemon/30/`).flush(pikachuFromApi);

  });*/

  afterEach( () => {
    Math.random = MathRandom;
  });
});
