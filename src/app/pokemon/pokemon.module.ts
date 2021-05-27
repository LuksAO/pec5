import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonDetailsComponent } from './views/pokemon-details/pokemon-details.component';
import { PokemonsListComponent } from './views/pokemons-list/pokemons-list.component';


@NgModule({
  declarations: [
    PokemonDetailsComponent,
    PokemonsListComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
