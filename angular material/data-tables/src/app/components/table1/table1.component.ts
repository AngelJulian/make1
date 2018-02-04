import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { User } from '../../models/user.model';

@Component({
  selector: 'table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {

  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['name', 'email', 'phone', 'company'];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}

export class UserDataSource extends DataSource<any> {
  constructor( private userService: UserService) {
    super();
  }

  connect(): Observable<User[]> {
    return this.userService.getUser();
  }

  disconnect(){};
}