import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { HelloComponent } from './components/hello/hello.component';

const routes: Routes = [
  {path: 'employeelist', component: EmployeelistComponent},
  {path: 'hello', component: HelloComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
