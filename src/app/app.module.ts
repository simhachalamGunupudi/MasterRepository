import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LoginModuleModule} from './login-module/login-module.module';
import {SharedModuleModule} from './shared-module/shared-module.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LoginModuleModule,
    SharedModuleModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
