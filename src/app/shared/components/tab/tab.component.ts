import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  imports: [CommonModule],
})
export class TabComponent {
  @Input() active = false;
  @Input() value: any = null;
  public selectTab: Subject<any> = new Subject();
  constructor() {}

  handelChangeTab() {
    this.selectTab.next(this.value);
  }
}
