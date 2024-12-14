import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isBottom: boolean = true;
  languageList = document.getElementById('switch-lang');
  body = document.getElementById('body');

  handleSwitchLang(event: any) {
    let lang = event.target.value;

    switch (lang) {
      case 'en':
        this.body!.style.direction = 'ltr';
        document.documentElement.setAttribute('lang', 'en');
        break;
      case 'ar':
        this.body!.style.direction = 'rtl';
        document.documentElement.setAttribute('lang', 'ar');
        break;
      default:
        this.body!.style.direction = 'ltr';
    }
  }
}
