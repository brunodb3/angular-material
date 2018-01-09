/**
 *  app.module.ts
 *    - app module declaration, angular's first module to load, where we will load everything else
 *
 **************************************************************************************************/

// importing 3rd party libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// importing custom modules
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { StaticModule } from '@app/static';

// importing main app's files
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';

// creating the module
@NgModule({
  declarations: [
    // custom components
    AppComponent
  ],
  imports: [
    // angular modules
    BrowserModule,
    BrowserAnimationsModule,

    // custom modules
    CoreModule,
    SharedModule,
    StaticModule,
    AppRouting,
  ],
  providers: [],
  bootstrap: [
    // component to bootstrap (first component to load)
    AppComponent
  ]
})
export class AppModule { }
