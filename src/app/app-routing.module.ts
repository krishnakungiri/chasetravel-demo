import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserModule } from './create-user/create-user.module';
import { UsersListModule } from './users-list/users-list.module';
import { DirectiveExComponent } from './directive-ex/directive-ex.component';
import { FormsComponent } from './forms/forms.component';
import { NgContainerExComponent } from './components/ng-container-ex/ng-container-ex.component';

const routes: Routes = [
  { path: '', redirectTo: '/users-list', pathMatch: 'full' },
  { path: 'create-user', loadChildren: () => CreateUserModule },
  { path: 'users-list', loadChildren: () => UsersListModule },
  { path: 'directives', component: DirectiveExComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'ng-container', component: NgContainerExComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
