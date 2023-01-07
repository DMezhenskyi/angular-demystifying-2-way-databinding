import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-fuckounter',
  standalone: true,
  template: `
    <div class="counter">{{startFrom}}</div>
  `,
  styles: [`
    .counter {
      font-size: 50px;
    }
    :host {
      padding: 25px;
      background-color: #001f26;
      width: 200px;
      text-align: center;
      border-radius: 23px;
    }
  `]
})
export class CounterFuckounterComponent implements OnInit {
  @Input()
  startFrom = 0;

  @Output()
  startFromChange = new EventEmitter();

  ngOnInit() {
    setInterval(() => {
      this.startFrom = this.startFrom + 1;
      this.startFromChange.emit(this.startFrom);
    }, 1000)
  }
}
