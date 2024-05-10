import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule
  ],
  template: `<main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="https://pbs.twimg.com/profile_images/1250918117120921601/N1a1njeI_400x400.jpg" alt="logo" aria-hidden="true">
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Formaciones';
}
