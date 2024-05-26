import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateUserComponent } from '../create-user/create-user.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateExGuard implements CanDeactivate<CreateUserComponent> {
  canDeactivate(
    component: CreateUserComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log("component :", component);
    if (component.createUserForm.status === "INVALID") {
      alert("You have unsaved changes, Are you sure want to navigate?!");
    }
    return true
  }

}
