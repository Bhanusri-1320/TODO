import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-competedtask',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './competedtask.component.html',
  styleUrl: './competedtask.component.scss',
})
export class CompetedtaskComponent {
  @Input() task: any;
  @Output() deleteTaskEvent = new EventEmitter<any>();
  deletetask() {
    console.log(this.task);
    this.deleteTaskEvent.emit(this.task);
  }
}
