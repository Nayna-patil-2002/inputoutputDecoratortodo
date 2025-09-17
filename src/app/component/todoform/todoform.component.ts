import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Itodo } from 'src/app/models/todoarr';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {
   @Output() emitTodoobj : EventEmitter<Itodo>=new EventEmitter()
   @ViewChild('todoItem')todoItemRef!:ElementRef
  constructor() { }

  ngOnInit(): void {
  }

  onTodoAdd(){
   if(this.todoItemRef.nativeElement.value){
     let Obj:Itodo={
      todoItem:this.todoItemRef.nativeElement.value
     }
     console.log(Obj)
     this.todoItemRef.nativeElement.value=""
     this.emitTodoobj.emit(Obj)
   }
  }

}
