import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCheckboxModule, MatPaginatorModule, MatFormFieldModule, MatSelectModule, MatProgressBarModule, } from '@angular/material';
import { MatTableModule } from '@angular/material/table';

import 'hammerjs';

import { AppComponent } from './app.component';
import { UsertableComponent } from './usertable/usertable.component';
import { Table1Component } from './components/table1/table1.component';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UsertableComponent,
    Table1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatProgressBarModule
  ],
  providers: [UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
