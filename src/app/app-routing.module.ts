import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyNewComponentComponent} from './my-new-component/my-new-component.component';


const routes: Routes = [
  { path: 'banana', component: MyNewComponentComponent },
    { path: '',   redirectTo: '/list', pathMatch: 'full' }, 
  { path: '**',  redirectTo: '/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
