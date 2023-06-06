import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ToDoListComponent } from '../todo-list/todo-list.component';
import { FormsModule, NgForm } from '@angular/forms';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ToDoListComponent, FormsModule]
})
export class Tab2Page {

  constructor(private todoService: TodoService) {}

  item = {
    "id": 0,
    "title": "",
    "description": "",
    "isComplete": false
  };


  onSubmit(form:NgForm){
    debugger
    this.todoService.createToDo(this.item).subscribe(p => {
      console.log(p)
    })    
  }
}
