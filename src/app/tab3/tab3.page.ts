import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ToDoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, ToDoListComponent],
})
export class Tab3Page {
  constructor() {}
}
