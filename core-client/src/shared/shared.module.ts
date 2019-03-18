import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule, MatInputModule} from '@angular/material';

const MATERIAL_MODULES = [
  MatInputModule,
  MatFormFieldModule,
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
