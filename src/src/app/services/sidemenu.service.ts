import { Component, Injectable, EventEmitter } from '@angular/core';
import { DemocomponentComponent } from '../democomponent/democomponent.component';

@Injectable()
export class SidemenuService {
  event = new EventEmitter<any>();
  constructor() { }
}