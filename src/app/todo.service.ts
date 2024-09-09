import { Injectable } from '@angular/core';
// const API = 'https://669a42939ba098ed61fef789.mockapi.io';
// const API = 'http://localhost:4000';
const API = 'https://todo-node-egt1.onrender.com';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  completedTask: any = [];
  constructor() {}
  addtask(task: any) {
    console.log(task);
    return fetch(`${API}/Todo`, {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }
  gettasks() {
    return fetch(`${API}/Todo`).then((res) => res.json());
  }
  deletetask(task: any) {
    return fetch(`${API}/Todo/${task.todoId}`, { method: 'Delete' }).then(
      (res) => res.json()
    );
  }
  deleteCompletedTask(task: any) {
    return fetch(`${API}/CompletedTask/${task.todoId}`, {
      method: 'Delete',
    }).then((res) => res.json());
  }
  addtocompleted(task: any) {
    this.completedTask.push(task);
    return fetch(`${API}/CompletedTask`, {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }
  getCompletedtask() {
    return fetch(`${API}/CompletedTask`).then((res) => res.json());
  }
}
