import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import {LoginComponent} from './login/login.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {TokenInterceptor} from './interceptors/token-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi:true
    },
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
