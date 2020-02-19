import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { Pokemon } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export default class PokeApiService {
  public baseURL: string = 'https://pokeapi.co/api/v2'

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
    return this.http.get<Pokemon>(`${this.baseURL}/pokemon/${key}/`)
      .pipe(
        catchError(this.handleError),
        map(p => Pokemon.fromApi(p))
      )
  }

  public getByName(name: string): Observable<Pokemon> {
    return this.getByKey(name);
  }

  public getById(id: number): Observable<Pokemon> {
    return this.getByKey(id);
  }
}
