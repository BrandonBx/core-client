import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import { ROUTES } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
