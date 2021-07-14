import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ButtonComponent implements OnInit {

  public buttonClass = 'button';


  @Input()
  set classes(buttonClasses) {
    this.buttonClass = buttonClasses;
  }

  constructor() { }

  ngOnInit() {

  }

}
