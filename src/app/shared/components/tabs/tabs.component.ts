import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  forwardRef,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TabsComponent),
      multi: true,
    },
  ],
  imports:[CommonModule]
})
export class TabsComponent implements AfterContentInit, ControlValueAccessor {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> | any;
  @Output() changeSelectValue: EventEmitter<any> = new EventEmitter();
  private onChange: any = () => {};
  private onTouched: any = () => {};
  public disabled: boolean = false;
  public value: any;
  constructor() {}

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.handelSelectTab();
    }, 0);
  }

  writeValue(value: any): void {
    this.value = value;
    this.handelSelectTabByValue();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  changeValue() {    
    this.onChange(this.value);
    this.changeSelectValue.emit(this.value);
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handelSelectTab() {
    let activeTabs = this.tabs?.filter((tab: TabComponent) => tab.active);
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
    this.tabs.forEach((tab: TabComponent) => {
      tab.selectTab.subscribe(() => {
        this.selectTab(tab);
        this.value = tab.value;
        this.changeValue();
      });
    });
  }

  handelSelectTabByValue() {
    let activeTabs = this.tabs?.filter(
      (tab: TabComponent) => tab.value == this.value
    );
    if (!!activeTabs) this.selectTab(activeTabs);
    // else this.handelSelectTab();
  }

  selectTab(tab: TabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach((tab: TabComponent) => (tab.active = false));

    // activate the tab the user has clicked on.
    tab.active = true;
  }
}
