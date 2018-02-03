import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template:   `
  <div class="dashboard">
    <h1>Welcome to The Admin's page!</h1>
  </div>
  `,
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
