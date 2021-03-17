import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.css']
})
export class WellListComponent implements OnInit {

  public wellTableDetails: Array<{ name: string, type: string, sourcekey: number, color: string }> = [
    { name: 'user1', type: 'rls', sourcekey: 100001, color: '#BABBCB' },
    { name: 'user2', type: 'esp', sourcekey: 101010101, color: '#BAFBCC' }

  ]

  selectedWell: object = {};
  showModal: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  openAddWell(wellIndex: number) {
    this.selectedWell = this.wellTableDetails[wellIndex];
    this.showModal = true;
  }
  hideAddWell() {
    this.showModal = false;
  }
  addWellToList(event: any) {
    let obj = this.getColorCode(event);
    this.wellTableDetails.push(obj);
    this.hideAddWell();
  }

  getColorCode(obj: any) {
    for (let i = 0; i < this.wellTableDetails.length; i++) {
      if (this.wellTableDetails[i].type == obj.type) {
        obj.color = this.wellTableDetails[i].color;
        return obj;
      }
    }
    const colorCode: Array<any> = ["A", "B", "C", "D", "E", "F"]
    let concat = "#";
    for (let i = 0; i < colorCode.length; i++) {
      concat = concat + colorCode[Math.floor(Math.random() * 6)];
    }
    let isColorExist = this.wellTableDetails.filter(list => {
      return list.color == concat
    })
    if (isColorExist.length == 0) {
      obj.color = concat;
      return obj
    } else {
      this.getColorCode(obj);
    }
  }
}
