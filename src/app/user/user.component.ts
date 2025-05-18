import { Component,computed,signal ,Input, input, Output, EventEmitter, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

@Input({required:true})user!: { id: string; name: string; avatar: string; };
@Input({required:true}) selected!: boolean;
select = output<string>();
imagePath = computed(()=>'assets/users/' + this.user.avatar);

 OnselectUser(){
 return  this.select.emit(this.user.id);
}

}
