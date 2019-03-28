import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
  title = 'accessibility';
  currentClasses = '';
  visible = false;


  selectionList = [
    {
      name: '-- Choose --',
      value: 'none',
      highlight: false,
      className: '',
    },
    {
      name: 'Pixels',
      value: 'px',
      highlight: true,
      className: 'px',
    },
    {
      name: 'EM\'s',
      value: 'em',
      highlight: false,
      className: 'em',
    },
    {
      name: 'EM\'s (html font-size 62,5%)',
      value: 'em',
      highlight: true,
      className: 'em html625',
    },
    {
      name: 'REM\'s (html font-size fixed)',
      value: 'remfixed',
      highlight: false,
      className: 'rem html10px',
    },
    {
      name: 'REM\'s (html font-size 62,5%)',
      value: 'remperc',
      highlight: true,
      className: 'rem html625',
    },
    {
      name: 'REM\'s (html font-size 100%)',
      value: 'remperc',
      highlight: false,
      className: 'rem html100',
    },
    {
      name: 'Pixel viewport width',
      value: 'pxvw',
      highlight: true,
      className: 'pxvw html100',
    },
    {
      name: 'REM viewport width',
      value: 'remvw',
      highlight: true,
      className: 'remvw html625',
    },
  ];

  public setHtmlClass(selector) {
    this.currentClasses = this.selectionList[selector.target.options.selectedIndex].className;
    document.getElementsByTagName('HTML')[0].className = this.currentClasses;
  }

  public toggleVisibility() {
    this.visible = !this.visible;
  }
}
