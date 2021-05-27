import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PokemonData } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon$!: Observable<PokemonData>;

  constructor(
    route: ActivatedRoute,
    pokemonService: PokemonService
  ) {
    this.pokemon$ = route.params.pipe(
      switchMap(params => pokemonService.get(params['id']))
    );
  }

  ngOnInit(): void {
  }

}
