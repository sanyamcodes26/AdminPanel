import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditComponent } from './edit/edit.component'

@NgModule({
  declarations: [ViewComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SubjectModule { }
