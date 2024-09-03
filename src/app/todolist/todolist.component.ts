import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() task: any;
  @Output() deleteTaskEvent = new EventEmitter<any>();
  constructor(private todoService: TodoService) {}
  deletetask() {
    console.log(this.task);
    console.log('Child ❌', this.task);
    this.deleteTaskEvent.emit(this.task);
  }
}
