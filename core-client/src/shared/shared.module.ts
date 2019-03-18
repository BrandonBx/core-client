import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

const modules = [
  BrowserAnimationsModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  FlexLayoutModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...modules,
  ],
  declarations: [],
  exports: [
    ...modules,
  ],
})
export class SharedModule {
}
