import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-well',
  templateUrl: './add-well.component.html',
  styleUrls: ['./add-well.component.css']
})
export class AddWellComponent implements OnInit {

  @Input('addWell') addWell: any
  @Output() addWellToListArr = new EventEmitter<any>();
  addWellChild: any
  constructor() { }

  ngOnInit(): void {
    let _addWell = this.addWell;
    this.addWellChild = { ..._addWell };
  }
  addWellToList() {
    this.addWellToListArr.emit(this.addWellChild);
  }


}
