import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../guards/auth.guard';
import { DeactivateExGuard } from '../guards/deactivate-ex.guard';

const routes: Routes = [
  { path: '', component: CreateUserComponent, canActivate: [AuthGuard], canDeactivate: [DeactivateExGuard] }
]


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreateUserModule { }
