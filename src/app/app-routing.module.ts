import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

//order of the paths is important like else if.

const routes: Routes = [
  { path: 'users', component: UserListComponent},
  { path: 'users/:id', component: UserDetailComponent},
  { path: '', redirectTo: 'users', pathMatch:'full'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
