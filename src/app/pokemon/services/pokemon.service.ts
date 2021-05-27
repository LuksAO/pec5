import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, PokemonData } from '../models/pokemon';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly api = 'https://pokeapi.co/api/v2/';

  constructor(
    private http: HttpClient
  ) { }

  getAll(limit: number = 10): Observable<Pokemon[]>{
    return this.http.get(this.api + 'pokemon?limit=' + limit).pipe(
      map((response: any) => response.results.map((pok: any)=> new Pokemon(pok)))
    );
  }

  get(id: string): Observable<PokemonData> {
    return this.http.get<PokemonData>(this.api + 'pokemon/' + id);
  }

}
