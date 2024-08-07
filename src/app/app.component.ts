import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}} test</div>`,
})
export class AppComponent {
  value = 'World';
}
