import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminprivilegeRoutingModule } from './adminprivilege-routing.module';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [ViewComponent, EditComponent],
  imports: [
    CommonModule,
    AdminprivilegeRoutingModule
  ]
})
export class AdminprivilegeModule { }
