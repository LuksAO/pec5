import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './views/pokemon-details/pokemon-details.component';
import { PokemonsListComponent } from './views/pokemons-list/pokemons-list.component';

const routes: Routes = [
  { path: '', component: PokemonsListComponent },
  { path: ':id', component:  PokemonDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
