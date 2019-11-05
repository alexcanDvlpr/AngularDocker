import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://pokeapi.co/api/v2/pokemon/pikachu/';
  }

  getPikachu() {
    return this.http.get(this.url).toPromise();
  }

}
