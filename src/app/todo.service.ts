import { Injectable } from '@angular/core';
const API = 'https://669a42939ba098ed61fef789.mockapi.io/Todo';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  completedTask: any = [];
  constructor() {}
  addtask(task: any) {
    console.log(task);
    return fetch(`${API}`, {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }
  gettasks() {
    return fetch(`${API}`).then((res) => res.json());
  }
  deletetask(task: any) {
    console.log();
    return fetch(`${API}/${task.id}`, { method: 'Delete' }).then((res) =>
      res.json()
    );
  }
  addtocompleted(task: any) {
    this.completedTask.push(task);
  }
  getCompletedtask() {
    return this.completedTask;
  }
}
