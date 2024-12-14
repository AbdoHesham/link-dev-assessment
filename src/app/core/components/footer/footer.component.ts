import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FacebookIconComponent } from '../../../shared/components/icons/facebook-icon/facebook-icon.component';
import { InstagramIconComponent } from '../../../shared/components/icons/instagram-icon/instagram-icon.component';
import { TwitterIconComponent } from '../../../shared/components/icons/twitter-icon/twitter-icon.component';
import { AppleStoreIconComponent } from '../../../shared/components/icons/apple-store-icon/apple-store-icon.component';
import { GooglePlayIconComponent } from '../../../shared/components/icons/google-play-icon/google-play-icon.component';

@Component({
  selector: 'app-footer',
  imports: [CommonModule,FacebookIconComponent , InstagramIconComponent,TwitterIconComponent,AppleStoreIconComponent,GooglePlayIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
