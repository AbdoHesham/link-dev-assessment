import { Component } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { CategoryEnum } from '../../enums/category.enum';
import { News } from '../../models/news.model';
import { NewsCategory } from '../../models/category.model';
import { EmptyDataComponent } from '../../../shared/components/empty-data/empty-data.component';
import { TabComponent } from '../../../shared/components/tab/tab.component';
import { TabsComponent } from '../../../shared/components/tabs/tabs.component';
import { NewsItemComponent } from '../../../shared/components/news-item/news-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-latest-news',
  imports: [EmptyDataComponent,TabComponent,TabsComponent,NewsItemComponent,CommonModule,FormsModule],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss'
})
export class LatestNewsComponent {
  newsCategory: NewsCategory[] = [];
  news: News[] = [];
  categoryEnum = CategoryEnum;

  selectedTab: number = 0;
  selectedCategory: number=0;
  filteredNews: any;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.handleGetNewsCategories();
    this.handleGetNewsListing()
  }

  handleGetNewsCategories() {
    this.newsService.getNewsCategories().subscribe((data) => {
      this.newsCategory = data?.newsCategory;
      this.newsCategory.unshift({ id: 0, name: 'All news' })
    });
  }

  handleGetNewsListing() {
    this.newsService.getNewsListing().subscribe((data) => {
      this.news = data.News;
      this.filteredNews = data.News;
    })
  }

  handleChangeNewsTab(category: number) {
    if (category == CategoryEnum.All_news) {
      this.filteredNews = this.news;
    } else {
      this.filteredNews = this.news.filter((item: News) => parseInt(item.categoryID) == this.selectedTab);
    }

  }
}
