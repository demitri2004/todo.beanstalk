import { Component, Input } from '@angular/core';
import { ToDo } from '../services/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  standalone: true,
})
export class ToDoListComponent {
  @Input() data?: ToDo;
}
