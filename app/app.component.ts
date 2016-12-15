import {Component } from '@angular/core';
import {Header} from './shared/header/header.component'
import {Footer} from './shared/footer/footer.component'

@Component({
  selector: 'shr-app',
  template: `<shr-header></shr-header><router-outlet></router-outlet><shr-footer></shr-footer>`
  })

export class AppComponent {

}