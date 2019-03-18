import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const MATERIAL_MODULES = [
  BrowserAnimationsModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
  ],
  declarations: [],
  exports: [...MATERIAL_MODULES],
})
export class SharedModule {
}
