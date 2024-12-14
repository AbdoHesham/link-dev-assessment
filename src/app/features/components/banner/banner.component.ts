import { Component, EventEmitter, Output } from '@angular/core';
import { BannerService } from '../../services/banner.service';
import { Banner } from '../../models/banner.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  bannerSlides: Banner[] = [];
  selectedIdx = 0;
  @Output() onChangeBanner=new EventEmitter<number>();
  constructor(private bannerService: BannerService) { }

  ngOnInit(): void {
    this.handleGetBannerDate();
  }

  handleGetBannerDate() {
    this.bannerService.getBannerData().subscribe((data) => {
      this.bannerSlides = data.slides;
    });
  }
  changeBanner(id: number) {
    this.selectedIdx = id;
    this.onChangeBanner.emit(id);
  }
}
