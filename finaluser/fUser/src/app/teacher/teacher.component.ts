import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  template: `
  <div class="dashboard">
    <h1>Welcome to The Teacher's page!</h1>
  </div>
  `,
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
