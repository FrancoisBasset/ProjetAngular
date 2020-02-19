import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class RandomService {
  public randomIntInterval(a: number, b: number): number {
    return Math.floor(Math.random() * a + b);
  }
}
