import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragDropComponent } from './main/drag-drop/drag-drop.component';
import { UserDetailsComponent } from './main/user-details/user-details.component';
import { WellListComponent } from './main/well-list/well-list.component';

const routes: Routes = [
  {path:'user-details', component:UserDetailsComponent},
  {path:'well-list', component:WellListComponent},
  {path:'drag-drop', component:DragDropComponent},
  {path:'', redirectTo:'user-details', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
