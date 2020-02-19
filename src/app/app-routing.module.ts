import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FightComponent } from './fight/fight.component';
import { SelectionComponent } from './selection/selection.component';

const routes: Routes = [
  { path: 'pokemons', component: PokemonComponent },
  { path: 'selection', component: SelectionComponent },
  { path: 'fight', component: FightComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
