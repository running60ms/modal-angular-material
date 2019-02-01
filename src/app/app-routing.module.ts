import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TableTestComponent} from './table-test/table-test.component';

const routes: Routes = [
  {
    path: 'table', component: TableTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
