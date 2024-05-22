import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserModule } from './create-user/create-user.module';
import { UsersListModule } from './users-list/users-list.module';

const routes: Routes = [
  { path: '', redirectTo: '/users-list', pathMatch: 'full' },
  { path: 'create-user', loadChildren: () => CreateUserModule },
  { path: 'users-list', loadChildren: () => UsersListModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
