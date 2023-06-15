import { Component } from '@angular/core'

@Component({
  selector: 'app-navbar',
  template: `
    <h1>Navbar</h1>
    <p>Teste</p>
  `,
  styles: [`h1 {
    color: red;
    font-size: 10rem;
  }
  `, `
  p {
    color: blue;
  }
  `]
})

export class NavbarComponent {
  constructor() {}
}
