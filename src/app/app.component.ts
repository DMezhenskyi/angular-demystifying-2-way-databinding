import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <img width="150"src="https://www.decodedfrontend.io/wp-content/uploads/2021/01/icon.png" alt="Decoded Frontend">
    <h1>Demystifying <br> 2-Way-Databinding</h1>
    <input [(ngModel)]="inputValue" type="text">
    <div class="input-value">Input value: <b>{{inputValue}}</b></div>
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
  inputValue = '';
}
