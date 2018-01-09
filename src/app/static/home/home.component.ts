/**
 *  home.component.ts
 *    - home component declaration
 *
 **************************************************************************************************/

// importing 3rd party libraries
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

// creating the component
@Component({
  selector: 'amfb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // component variable declarations
  private title: string = 'home';

  constructor() { }

  // fires when component is ready
  ngOnInit(): void {
    console.log(`${this.title} loaded`)
  }
}
