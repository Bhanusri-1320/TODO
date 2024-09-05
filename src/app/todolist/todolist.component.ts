import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss',
})
export class TodolistComponent {
  iscompleted: any;
  @Input() task: any;
  @Output() deleteTaskEvent = new EventEmitter<any>();
  @Output() completedTaskEvent = new EventEmitter<any>();
  constructor(private todoService: TodoService) {}
  deletetask() {
    console.log(this.task);
    this.deleteTaskEvent.emit(this.task);
  }
  completed() {
    this.iscompleted = 'line-through';
    console.log(this.task);
    this.completedTaskEvent.emit(this.task);
  }
}
