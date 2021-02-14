import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public title: string = 'Counter'
  public counter: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.counter++
  }

  decrement() {
    this.counter--
  }

  reset() {
    this.counter = 0
  }
}
