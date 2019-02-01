import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomAngularMaterialModule} from './custom-angular-material.module';
import {TableTestComponent} from './table-test/table-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TableTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomAngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
