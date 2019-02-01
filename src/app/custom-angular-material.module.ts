import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatTableModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatDialogModule, MatTableModule],
  exports: [MatButtonModule, MatCheckboxModule, MatDialogModule, MatTableModule],
})
export class CustomAngularMaterialModule {
}
