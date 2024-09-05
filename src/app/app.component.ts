import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo.service';
import { CompetedtaskComponent } from './competedtask/competedtask.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodolistComponent,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CompetedtaskComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  completedTask!: any;
  title = 'my-app';
  tasks = {
    task: '',
    id: '',
  };
  taskList: any = [];
  constructor(private todoService: TodoService) {
    console.log('getting');
    this.todoService
      .gettasks()
      .then((data) => (this.taskList = data))
      .then(() => console.log(this.taskList));
  }
  loadtasks() {
    this.todoService
      .gettasks()
      .then((data) => (this.taskList = data))
      .then(() => (this.completedTask = this.todoService.getCompletedtask()));
  }
  ngOnInit() {
    console.log('getting');
    this.loadtasks();
  }
  addtask() {
    // this.taskList.push(this.task);
    console.log(this.tasks);
    if (this.tasks.task != '') {
      this.todoService
        .addtask(this.tasks)
        .then(() => (this.tasks.task = ''))
        .then(() => this.loadtasks());
    }
  }
  deleteTask(task: any) {
    this.todoService.deletetask(task).then(() => this.loadtasks());
  }
  completed(task: any) {
    console.log(task);
    this.todoService.addtocompleted(task);
  }
  getCompletedTask() {
    this.completedTask = this.todoService.getCompletedtask();
  }
}
