import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  public counter: number = 0;

  public incrementBy(number: number): void {
    this.counter = this.counter + number;
  }

  public decrementBy(number: number): void {
    this.counter = this.counter - number;
  }

  public reset(): void {
    this.counter = 0;
  }
}
