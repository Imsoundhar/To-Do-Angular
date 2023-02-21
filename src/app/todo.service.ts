import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category';
import { Task } from './task';

@Injectable(
  {providedIn: 'root'}
)
export class ToDoService {

  apiDefaultUrl: string = "http://localhost:8080/todo/";
  constructor(private http: HttpClient) { }

  addCategory(object: Category, url: string) {
    let httpHeaders = new HttpHeaders();
    httpHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      headers: httpHeaders,
    };
    return this.http.post(this.apiDefaultUrl + url, object, requestOptions)
      .subscribe((response) => {
        return response;
      });
  }

  getCategories() {
    return this.http.get(this.apiDefaultUrl + "categories");
  }

  addTask(task: Task, url:string) {
    let httpHeaders = new HttpHeaders();
    httpHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      headers: httpHeaders,
    };
    return this.http.post(this.apiDefaultUrl + url, task, requestOptions)
      .subscribe((response) => {
        return response;
      });
  }

  getTasks() {
    return this.http.get(this.apiDefaultUrl + "tasks");
  }

  getTasksByCategoryId(selectedCategoryId: number) {
    return this.http.get(this.apiDefaultUrl + "taskByCategory/" + selectedCategoryId);
  }
}
