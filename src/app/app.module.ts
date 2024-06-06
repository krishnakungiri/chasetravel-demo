import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { UsersListComponent } from './users-list/users-list.component';
import { DeleteConfirmationModalComponent } from './modals/delete-confirmation-modal/delete-confirmation-modal.component';
import { UpdateUserModalComponent } from './modals/update-user-modal/update-user-modal.component';
import { UserDetailsComponent } from './users-list/user-details/user-details.component';
import { DirectiveExComponent } from './directive-ex/directive-ex.component';
import { CustomPipe1Pipe } from './pipes/custom-pipe-1.pipe';
import { FormsComponent } from './forms/forms.component';
import { NgContainerExComponent } from './components/ng-container-ex/ng-container-ex.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersListComponent,
    UpdateUserModalComponent,
    DeleteConfirmationModalComponent,
    CreateUserComponent,
    UserDetailsComponent,
    DirectiveExComponent,
    CustomPipe1Pipe,
    FormsComponent,
    NgContainerExComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
