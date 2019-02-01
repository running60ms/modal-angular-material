import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomAngularMaterialModule} from './custom-angular-material.module';
import {PlayersSelectedComponent} from './players-selected/players-selected.component';
import { PlayersComponent } from './players/players.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PlayersSelectedComponent,
    PlayersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomAngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PlayersComponent]
})
export class AppModule {
}
