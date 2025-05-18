import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-js';
  users = DUMMY_USERS;    
  selectedUserId!:string; // Default selected user ID

onSelectUser(id: string) {
 this.selectedUserId = id; // Update the selected user ID 
console.log('Selected user ID:', id); 
}

get selectedUser() {
  console.log('Selected user:', this.selectedUserId);
 return  this.users.find(user => user.id === this.selectedUserId)!;
  
}


} 
