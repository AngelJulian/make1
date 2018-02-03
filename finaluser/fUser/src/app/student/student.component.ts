import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  template: `
  <div class="dashboard">
    <h1>Welcome to The Student's page!</h1>
  </div>, 
  `,
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
