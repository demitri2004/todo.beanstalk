import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ToDoListComponent } from '../todo-list/todo-list.component';
import { ToDo } from '../services/todo';
import { TodoService } from '../services/todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ToDoListComponent, CommonModule,FormsModule, RouterModule],
})
export class Tab1Page {
  data: ToDo[] = [];
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string = "";
  fact = "";

  constructor(private toDoService: TodoService) { }

  ngOnInit() {
    console.log('in ngOnInit')
    this.toDoService.getData().subscribe((response) => {
      this.data = response;
    });
  }

  ionViewWillEnter(){
    console.log('in ionViewWillEnter')
    this.ngOnInit();
  }

  getWeather(){
    this.toDoService.getWeather().subscribe(p => {
      console.log(p)
      this.fact = p.fact;
    })
  }

  doGet(){
    this.toDoService.doGet().then(p => {
      console.log(p)
    })
  }
}
