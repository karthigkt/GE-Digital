import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './main/user-details/user-details.component';
import { WellListComponent } from './main/well-list/well-list.component';
import { AddWellComponent } from './main/add-well/add-well.component';
import { DragDropComponent } from './main/drag-drop/drag-drop.component';
import { HeaderComponent } from './main/shared/header/header.component';
import { TableComponent } from './main/shared/table/table.component';
import { FooterComponent } from './main/shared/footer/footer.component';
import { TimerComponent } from './main/shared/timer/timer.component';
import { DropdownComponent } from './main/shared/dropdown/dropdown.component';
import { SpinnerComponent } from './main/shared/spinner/spinner.component';
import { TextboxComponent } from './main/shared/textbox/textbox.component';
import { DividerComponent } from './main/shared/divider/divider.component';
import { MaskComponent } from './main/shared/mask/mask.component';
import { ButtonComponent } from './main/shared/button/button.component';
@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    WellListComponent,
    AddWellComponent,
    DragDropComponent,
    HeaderComponent,
    TableComponent,
    FooterComponent,
    TimerComponent,
    DropdownComponent,
    SpinnerComponent,
    TextboxComponent,
    DividerComponent,
    MaskComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
