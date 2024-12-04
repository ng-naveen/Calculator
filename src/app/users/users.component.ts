import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: false,
  
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users:any[] = [
    {id:1, name:'hari', department:'dev', salary:100000, city:'bnglr', doj:new Date('01/20/2025')},
    {id:2, name:'amal', department:'qa', salary:50000, city:'kochi', doj:new Date('10/01/2025')},
    {id:3, name:'mukhil', department:'dev', salary:75000, city:'kochi', doj:new Date('12/01/2025')},
    {id:4, name:'nandhu', department:'qa', salary:50000, city:'bnglr', doj:new Date('11/01/2025')},
  ]
}
