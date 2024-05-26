import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user.model';

@Component({
  selector: 'app-directive-ex',
  templateUrl: './directive-ex.component.html',
  styleUrls: ['./directive-ex.component.css']
})
export class DirectiveExComponent implements OnInit {
  users!: IUser[]

  constructor() { }

  ngOnInit(): void {
    this.users = [
      { id: 1, firstName: 'name1', lastName: 'nam2', age: 123 },
      { id: 2, firstName: 'name1', lastName: 'nam2', age: 123 },
      { id: 3, firstName: 'name1', lastName: 'nam2', age: 123 },
      { id: 4, firstName: 'name1', lastName: 'nam2', age: 123 },
      { id: 5, firstName: 'name1', lastName: 'nam2', age: 123 }

    ]
  }



}
