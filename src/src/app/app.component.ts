import { Component, AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { SidedirDirective } from './directives/sidedir.directive';
import { ComponentFactoryResolver } from '@angular/core';
import { SidemenuService } from './services/sidemenu.service';
import { DemocomponentComponent } from './democomponent/democomponent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(SidedirDirective) sideDir: SidedirDirective;

  constructor(private sideService: SidemenuService , 
              private componentFactoryResolver: ComponentFactoryResolver) {}
              
    ngAfterViewInit() {
      this.sideService.event.subscribe(
      (sideComponent) => {
        
        const factory = this.componentFactoryResolver.resolveComponentFactory(sideComponent);
        this.sideDir.viewContainerRef.createComponent(factory);
      }
    );
  }
}