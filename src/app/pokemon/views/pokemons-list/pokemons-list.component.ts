import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {

  pokemons$: Observable<Pokemon[]>;

  constructor(
    pokemonService: PokemonService
  ) { 
    this.pokemons$ = pokemonService.getAll();
  }

  ngOnInit(): void {
  }

}
