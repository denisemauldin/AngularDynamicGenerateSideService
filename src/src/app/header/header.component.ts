import { Component, OnInit } from '@angular/core';
import { SidemenuService } from '../services/sidemenu.service';
import { DemocomponentComponent } from '../democomponent/democomponent.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private sidemenuService: SidemenuService) { }
  component = DemocomponentComponent;
  ngOnInit() {
  }
  setComponent(comp) {
    if (comp === 'demo') {
      this.sidemenuService.event.emit(this.component);
    }
  }

}