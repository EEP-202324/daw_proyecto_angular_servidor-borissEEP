import { Component } from '@angular/core';
import { IntroComponent } from './intro/intro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IntroComponent
  ],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="https://images.vexels.com/media/users/3/132252/isolated/lists/1ec5882de4ed9ca4f7fa27f2251d9d41-soccer-shooting-silhouette.png" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
     <app-intro></app-intro>
    </section>
  </main>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'jugadores';
}
