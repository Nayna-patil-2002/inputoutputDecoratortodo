import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoformComponent } from './component/todoform/todoform.component';
import { TodolistComponent } from './component/todolist/todolist.component';
import { TododashbordComponent } from './component/tododashbord/tododashbord.component';
import { StudentdashboardComponent } from './component/studentdashboard/studentdashboard.component';
import { StudentformComponent } from './component/studentform/studentform.component';
import { StudenttableComponent } from './component/studenttable/studenttable.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoformComponent,
    TodolistComponent,
    TododashbordComponent,
    StudentdashboardComponent,
    StudentformComponent,
    StudenttableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
