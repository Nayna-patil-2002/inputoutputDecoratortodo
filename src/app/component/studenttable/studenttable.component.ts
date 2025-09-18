import { Component, Input, OnInit } from '@angular/core';
import { Istudent } from 'src/app/models/studentarr';

@Component({
  selector: 'app-studenttable',
  templateUrl: './studenttable.component.html',
  styleUrls: ['./studenttable.component.scss']
})
export class StudenttableComponent implements OnInit {
  @Input() studenttable:Array<Istudent>=[]
  constructor() { }

  ngOnInit(): void {
  }

}
