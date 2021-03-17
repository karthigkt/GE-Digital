import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { DividerComponent } from '../shared/divider/divider.component';
import { DropdownComponent } from '../shared/dropdown/dropdown.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { MaskComponent } from '../shared/mask/mask.component';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { TableComponent } from '../shared/table/table.component';
import { TextboxComponent } from '../shared/textbox/textbox.component';
import { TimerComponent } from '../shared/timer/timer.component';

@Component({
  selector: 'drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {

  @ViewChild('dropArea', { read: ViewContainerRef }) dropArea: ViewContainerRef | undefined
  dragItemList: Array<any> = [
    { name: 'Header', comp: HeaderComponent },
    { name: 'Table', comp: TableComponent },
    { name: 'Footer', comp: FooterComponent },
    { name: 'Time', comp: TimerComponent },
    { name: 'Dropdown', comp: DropdownComponent },
    { name: 'Spinner', comp: SpinnerComponent },
    { name: 'Textbox', comp: TextboxComponent },
    { name: 'Button', comp: ButtonComponent },
    { name: 'Divider', comp: DividerComponent },
    { name: 'Mask', comp: MaskComponent },
  ];
  dragItemIndex: number = 0;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  ondragstart(event: any, index: any) {
    this.dragItemIndex = index;
  }
  ondropover(event: any) {
    event.preventDefault();
  }
  ondrop(event: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.dragItemList[this.dragItemIndex].comp);
    this.dropArea?.createComponent(componentFactory);
  }

}
