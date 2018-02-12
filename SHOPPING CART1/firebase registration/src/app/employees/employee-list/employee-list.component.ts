import { Component, OnInit } from '@angular/core';
//import { AngularFireList} from 'angularfire2/database';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';


@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];

  constructor(private employeeSrv: EmployeeService) { }

  ngOnInit() {
    var x = this.employeeSrv.getData();
    x.snapshotChanges().subscribe(item =>{
      this.employeeList = [];
      item.forEach(element =>{
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.employeeList.push(y as Employee);
      });
    });
  }

  onItemClick(emp: Employee){
    this.employeeSrv.selectedEmployee = Object.assign({},emp);
  }
}
