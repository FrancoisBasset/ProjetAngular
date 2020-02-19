import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Pokemon } from './models'
import { Observable, throwError } from 'rxjs';

@Injectable()
export default class PokeApiService {
  private baseURL: string = 'https://pokeapi.co/api/v2'

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

  public getByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseURL}/pokemon/${name}/`).pipe(catchError(this.handleError));
  }
}
