import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidedirDirective } from './directives/sidedir.directive';
import { SidemenuService } from './services/sidemenu.service';
import { HeaderComponent } from './header/header.component';
import { DemocomponentComponent } from './democomponent/democomponent.component';



@NgModule({
  declarations: [
    AppComponent,
    SidedirDirective,
    HeaderComponent,
    DemocomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SidemenuService],
  bootstrap: [AppComponent],
  entryComponents: [ DemocomponentComponent ]
})
export class AppModule { }
