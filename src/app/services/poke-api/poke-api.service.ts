import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError, forkJoin } from 'rxjs';

import { Pokemon, PokemonDTO, AttackDTO, Attack } from 'src/app/models';
import { randomIntInterval } from 'src/app/utils/utils'

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

  public getByKeyWithoutAttacks(key: string | number): Observable<Pokemon> {
    //console.log('get', key)
    return this.http.get<PokemonDTO>(`${this.baseURL}/pokemon/${key}/`)
      .pipe(
        catchError(this.handleError),
        //tap(console.log),
        map(p => Pokemon.fromDto(p))
      )
  }

  // with attacks
  public getByKey(key: string | number): Observable<Pokemon> {
    //console.log('get', key)
    return new Observable<Pokemon>( observer => {

      this.getByKeyWithoutAttacks(key).subscribe(
        (pokemon: Pokemon) => {
          const attacksRequests: Observable<Attack>[] = pokemon.attacks.map(attack => this.getMoveByUrl(attack.url));
          forkJoin(attacksRequests).subscribe( (attacks: Attack[]) => {
            pokemon.attacks = attacks.filter(attack => attack.basePower !== null).slice(0, 4); // on ne garde que 4 attaques
            observer.next(pokemon);
          })
        }),
        err => observer.error(err),
        () => observer.complete();
      });
  }

  public getMoveByUrl(url: string): Observable<Attack> {
    return this.http.get<AttackDTO>(url)
      .pipe(
        catchError(this.handleError),
        map(dto => Attack.fromDto(dto))
      )
  }

  public getRandomPokemons(nb: number): Observable<Pokemon[]> {
    let requests: Observable<Pokemon>[] = [];
    let processedIds: number[] = [];
    let random: number;
    for ( let i = 0 ; i < nb ; i++ ) {
      do {
        random = randomIntInterval(1, this.nbTotalPokemons); // id=0 n'existe pas
      } while ( processedIds.includes(random));
      requests.push(this.getByKeyWithoutAttacks(random));
    }
    return forkJoin(requests);
  }
}
