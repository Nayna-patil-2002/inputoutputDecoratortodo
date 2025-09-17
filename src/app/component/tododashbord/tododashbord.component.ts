import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/models/todoarr';

@Component({
  selector: 'app-tododashbord',
  templateUrl: './tododashbord.component.html',
  styleUrls: ['./tododashbord.component.scss']
})
export class TododashbordComponent implements OnInit {
    todoArr:Array<Itodo>=[
      {
        todoItem:"javascript"
      },
      {
        todoItem:"html"
      },
      {
        todoItem:"css"
      },
      {
        todoItem:"javascript"
      },
    ]
  constructor() { }

  ngOnInit(): void {

  }

  getTodo(todoObj:Itodo){
   this.todoArr.push(todoObj)
  }

}
