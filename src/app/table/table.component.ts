import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() List: any[] = [];
 
  constructor() { }

  ngOnInit(): void {
    console.log(this.List)
  }

  remove(index:number){
    this.List.splice(index,1)

  }
 

}
