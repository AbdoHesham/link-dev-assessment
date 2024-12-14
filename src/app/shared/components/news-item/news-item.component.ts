import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { News } from '../../../features/models/news.model';
import { CategoryEnum } from '../../../features/enums/category.enum';
import { DateIconComponent } from '../icons/date-icon/date-icon.component';
import { ShareIconComponent } from '../icons/share-icon/share-icon.component';
import { FavoriteIconComponent } from '../icons/favorite-icon/favorite-icon.component';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
  imports: [CommonModule,DateIconComponent,ShareIconComponent,FavoriteIconComponent],
})
export class NewsItemComponent {
  @Input() news: News[] = [];
  categoryEnum = CategoryEnum;
}
