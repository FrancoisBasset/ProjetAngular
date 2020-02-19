import { TestBed } from '@angular/core/testing';

import PokeApiService from './poke-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Pokemon } from 'src/app/models';

describe('PokeApiService', () => {
  let service: PokeApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokeApiService]
    });
    service = TestBed.inject(PokeApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should get pikachu', () => {
    expect(service).toBeTruthy();

    service.getByName('pikachu').subscribe((pokemon: Pokemon) => {
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

    service.getById(1).subscribe((pokemon: Pokemon) => {
      expect(pokemon.name).toBe('Pikachu');
    });

    const req = httpMock.expectOne(`${service.baseURL}/pokemon/1/`);
    expect(req.request.method).toBe('GET');

    req.flush({
      id: 1
    });

    httpMock.verify();
  });
});
