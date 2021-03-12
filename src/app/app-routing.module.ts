import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'user', loadChildren:() => import ('./user/user.module')
    .then(mod => mod.UserModule)
    //lazy loading, when required this module will be loaded or else not
  },
  {
    path:'subject', loadChildren:() => import ('./subject/subject.module')
    .then(mod => mod.SubjectModule)
    //lazy loading, when required this module will be loaded or else not
  },
  {
    path:'coordinator', loadChildren:() => import ('./coordinator/coordinator.module')
    .then(mod => mod.CoordinatorModule)
    //lazy loading, when required this module will be loaded or else not
  },
  {
    path:'adminprivilege', loadChildren:() => import ('./adminprivilege/adminprivilege.module')
    .then(mod => mod.AdminprivilegeModule)
    //lazy loading, when required this module will be loaded or else not
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
