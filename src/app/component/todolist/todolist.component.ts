import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from 'src/app/models/todoarr';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
   @Input() todolist:Array<Itodo>=[]
  constructor() { }

  ngOnInit(): void {
  }

}
