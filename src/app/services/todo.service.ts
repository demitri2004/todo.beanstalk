import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from './todo';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';

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
    return this.http.put<ToDo>(this.apiUrl + "api/todo/" + todo.id, todo)
  }

  createToDo(todo: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>(this.apiUrl + "api/todo/", todo)
  }

  deleteToDo(todo: ToDo): Observable<ToDo> {
    return this.http.delete<ToDo>(this.apiUrl + "api/todo/" + todo.id)
  }

  getWeather(){
    return this.http.get<any>("https://catfact.ninja/fact")
  }

  doGet = async () => {
    const options = {
      url: this.apiUrl + "api/todo/",
      headers: {  },
      params: {  },
    };
  
    const response: HttpResponse = await CapacitorHttp.get(options);
    return response;
  
    // or...
    // const response = await CapacitorHttp.request({ ...options, method: 'GET' })
  };
}
