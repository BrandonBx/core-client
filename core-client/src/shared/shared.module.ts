import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';

const MATERIAL_MODULES = [
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
