import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  standalone: true,
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  imports: [TaskComponent], 
})
export class TasksComponent {
  @Input({required: true}) id!: string;
  @Input({required:true}) name!: string;
  Tasks = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u2',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
]

get selectedUserTasks() {
  return this.Tasks.filter((task)=> task.userId === this.id);
}

onCompleteTask(id:string){
 this.Tasks = this.Tasks.filter((task)=> task.id!==id);
}




}
