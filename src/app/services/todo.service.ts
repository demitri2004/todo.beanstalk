import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = 'http://webapibeanstalk-2-dev.us-east-1.elasticbeanstalk.com/';

  constructor(private http: HttpClient) { }

  getData(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.apiUrl + "api/todo");
  }

  getToDo(id: number): Observable<ToDo> {
    return this.http.get<ToDo>(this.apiUrl + "api/todo/" + id)
  }

  editToDo(todo: ToDo): Observable<ToDo> {
    debugger
    return this.http.post<ToDo>(this.apiUrl + "api/todo/" + todo.id, todo)
  }

  createToDo(todo: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>(this.apiUrl + "api/todo/", todo)
  }
}
