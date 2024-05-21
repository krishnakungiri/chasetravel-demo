import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IUser, UsersData } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL: string = 'https://dummyjson.com'

  constructor(private http: HttpClient) { }

  createUser(userData: IUser): Observable<any> {
    return this.http.post(`${this.baseURL}/users/add`, userData).pipe(
      map((data: any) => {
        return data
      }), catchError(error => {
        return throwError(() => error);
      })
    )
  }

  getUsers(): Observable<UsersData> {
    return this.http.get<UsersData>(`${this.baseURL}/users`);
  }

  updateUser(id: number, userData: IUser): Observable<IUser> {
    return this.http.put(`${this.baseURL}/users/${id}`, userData).pipe(
      map((data: any) => {
        return data
      }), catchError(error => {
        return throwError(() => error);
      })
    )
  }

  deleteUser(id: number): Observable<IUser> {
    return this.http.delete<IUser>(`${this.baseURL}/users/${id}`);
  }
}
