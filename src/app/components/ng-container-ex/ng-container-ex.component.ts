import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container-ex',
  templateUrl: './ng-container-ex.component.html',
  styleUrls: ['./ng-container-ex.component.css']
})
export class NgContainerExComponent implements OnInit {

  isAuthenticated: boolean = false
  user = {
    name: 'krishna',

  }

  constructor() { }

  ngOnInit(): void {

  }

  logout() {
    this.isAuthenticated = false
  }

  login() {
    this.isAuthenticated = true


  }

}
