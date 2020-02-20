import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError, of, forkJoin } from 'rxjs';

import { Pokemon, PokemonDTO } from 'src/app/models';
import { randomIntLessThan } from 'src/app/utils/utils'

@Injectable({
  providedIn: 'root'
})
export default class PokeApiService {
  public baseURL: string = 'https://pokeapi.co/api/v2'
  public nbTotalPokemons: number = 150;

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public getByKey(key: string | number): Observable<Pokemon> {
    console.log('get', key)
    return this.http.get<PokemonDTO>(`${this.baseURL}/pokemon/${key}/`)
      .pipe(
        catchError(this.handleError),
        tap(console.log),
        map(p => Pokemon.fromDto(p))
      )
  }

  public getRandomPokemons(nb: number): Observable<Pokemon[]> {
    let requests: Observable<Pokemon>[] = [];
    let processedIds: number[] = [];
    let random: number;
    for ( let i = 0 ; i < nb ; i++ ) {
      do {
        random = randomIntLessThan(this.nbTotalPokemons);
      } while ( processedIds.includes(random));
      requests.push(this.getByKey(random));
    }
    return forkJoin(requests);
  }
}
