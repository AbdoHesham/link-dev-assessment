import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './features/components/home/home.component';
import { LatestNewsComponent } from './features/components/latest-news/latest-news.component';
// import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { ThingsWeDoComponent } from './features/components/things-we-do/things-we-do.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent,LatestNewsComponent,ThingsWeDoComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'link-dev-Assessment';
}
