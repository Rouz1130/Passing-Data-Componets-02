import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() count: number;

  @Output() countChanged: EventEmitter<number> = new EventEmitter();

  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }

  decrement() {
    this.count--;
    this.countChanged.emit(this.count)
  }

}
