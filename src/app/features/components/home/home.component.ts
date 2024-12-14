import { Component } from '@angular/core';
import { HeaderComponent } from '../../../core/components/header/header.component';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  decors=[
    {id:0,name:'decore-orange.svg'},
    {id:2,name:'decore-green.svg'},
    {id:1,name:'decore-purple.svg'},
  ]
  selectedDecore=this.decors[0].name;
  onBannerChanged(id: number) {
    const decore = this.decors.find(x => x.id === id);
    this.selectedDecore = decore ? decore.name : ''; 
  }
  
}
