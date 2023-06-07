import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule]
})
export class ItemComponent implements OnInit {
  item = {
    "id": 0,
    "title": "",
    "description": "",
    "isComplete": false
  };
  editMode: boolean = false;

  constructor(private todoService: TodoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      return this.todoService.getToDo(id).subscribe(p => {
        this.item = p;
      });
    });
  }

  editModeFlip() {
    this.editMode = !this.editMode;
  }

  onSubmit(form:NgForm){
    this.todoService.editToDo(this.item).subscribe(p => {
      console.log(p)
    })    
  }

  deleteTodo(form:NgForm){
    this.todoService.deleteToDo(this.item).subscribe(p => {
      console.log("deleted")
    })    
  }
}
