import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  val = signal(0)
  increment() {
    this.val.update(val => val + 1);
  }
  reset(){
    this.val.set(0);
  }
  decrement() {
    this.val.update(val => val - 1);
  }
}
