import { Component, OnInit } from '@angular/core';
import { Istudent } from 'src/app/models/studentarr';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.scss']
})
export class StudentdashboardComponent implements OnInit {
  stdArr:Array<Istudent> = [
  {
    name: "Virat Kohli",
    post: "Batsman",
    age: 36,
    contact: "virat.kohli@example.com"
  },
  {
    name: "Rohit Sharma",
    post: "Opening Batsman",
    age: 38,
    contact: "rohit.sharma@example.com"
  },
  {
    name: "Jasprit Bumrah",
    post: "Bowler",
    age: 32,
    contact: "jasprit.bumrah@example.com"
  },
  {
    name: "Ravindra Jadeja",
    post: "All-rounder",
    age: 37,
    contact: "ravindra.jadeja@example.com"
  },
  {
    name: "MS Dhoni",
    post: "Wicket Keeper",
    age: 44,
    contact: "ms.dhoni@example.com"
  }
];

  constructor() { }

  ngOnInit(): void {
  }

  getStd(stdObj:Istudent){
   this.stdArr.push(stdObj)
  }

}
