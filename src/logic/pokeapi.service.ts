import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pokemon } from './models'

@Injectable()
export default class PokeApiService {
  private baseURL: string = 'https://pokeapi.co/api/v2'

  constructor(private http: HttpClient) { }

  public async getByName(name: string): Promise<Pokemon> {
    return this.http.get(`pokemon/${name}/`)
      .toPromise()
      .then( response => {
        return response.json().results.map((pokemon) => Pokemon.parse(pokemon))
      })
  }
}
