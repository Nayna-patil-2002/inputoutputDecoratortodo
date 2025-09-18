import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Istudent } from 'src/app/models/studentarr';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.scss']
})
export class StudentformComponent implements OnInit {
   stdForm!:FormGroup
   @Output() emitstdObj:EventEmitter<Istudent>=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  this.craeteForm()
  }

  craeteForm(){
    this.stdForm=new FormGroup({
      name:new FormControl(null, [Validators.required]),
      post:new FormControl(null, [Validators.required]),
      age:new FormControl(null, [Validators.required]),
      contact:new FormControl(null, [Validators.required])
    })
  }

  stdAdd(){
     if(this.stdForm.valid){
       let stdObj:Istudent=this.stdForm.value;
        this.stdForm.reset()
       console.log(stdObj)
        this.emitstdObj.emit(stdObj)
       
     }
    console.log(this.stdForm.value)
   
  }



}
