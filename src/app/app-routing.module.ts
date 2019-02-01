import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlayersSelectedComponent} from './players-selected/players-selected.component';

const routes: Routes = [
  {path: 'players-selected', component: PlayersSelectedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
