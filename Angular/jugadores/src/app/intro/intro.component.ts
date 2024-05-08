import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by player">
      <button class="primary" type="button">Buscar</button>
    </form>
  </section>
`,
  styleUrl: './intro.component.css'
})
export class IntroComponent {

}
