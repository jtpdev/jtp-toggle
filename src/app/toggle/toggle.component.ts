import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'jtp-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

  @Input() options: any[];
  @Input() set: any;
  @Output() get: EventEmitter<any> = new EventEmitter<any>();

  currentOption: any;
  currentIndex: number = 0;

  constructor() { }

  ngOnInit() {
    this.initOptions();
  }
  
  private initOptions() {
    if (this.options && this.options.length > 0) {
      if (this.set) {
        this.currentOption = this.options.filter(o => o.value == this.set)[0];
        const index = this.options.map(o => o.value).indexOf(this.set);
        if (index > -1) {
          this.currentIndex = index;
        }
      }
      else {
        this.currentOption = this.options[0];
      }
    }
  }

  change() {
    if(this.options && this.options.length > 0) {
      if(this.currentIndex < this.options.length-1) {
        this.currentOption = this.options[++this.currentIndex];
      } else {
        this.currentOption = this.options[0];
        this.currentIndex = 0;
      }
      this.get.emit(this.currentOption.value)
    }
  }

}
