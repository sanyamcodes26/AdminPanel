import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewComponent} from './view/view.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';
const routes: Routes = [
  {
    path:'view',
    component:ViewComponent
  },
  {
    path:'edit',
    component:EditComponent
  },
  {
    path:'create',
    component:CreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
