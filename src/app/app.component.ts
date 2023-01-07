import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterFuckounterComponent } from './counter-fuckounter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterFuckounterComponent],
  template: `
    <img width="150"src="https://www.decodedfrontend.io/wp-content/uploads/2021/01/icon.png" alt="Decoded Frontend">
    <h1>Demystifying <br> 2-Way-Databinding</h1>
    <app-counter-fuckounter [(startFrom)]="counterValue"></app-counter-fuckounter> 
    <div class="input-value">Couter value: <b>{{counterValue}}</b></div>
  `,
  styles: [`
    input {
      font-size: 16px;
      padding: 10px 6px;
    }
    .input-value {
      margin-bottom: 20px;
    }
    :host {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-color: #003b4a;
      color: white;
      text-align: center;
    }
  `]
})
export class AppComponent {
  counterValue = 5;
  constructor() {
    setTimeout(() => {
      this.counterValue = 0; 
    }, 4000);
  }
}
