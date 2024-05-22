import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IUser, UsersData } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL: string = 'https://dummyjson.com/users'

  constructor(private http: HttpClient) { }

  createUser(userData: IUser): Observable<void> {
    return this.http.post<void>(`${this.baseURL}/add`, userData).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    );
  }

  getUsers(): Observable<UsersData> {
    return this.http.get<UsersData>(`${this.baseURL}`).pipe(
      map((data: UsersData) => {
        return data;
      }), catchError(error => {
        return throwError(() => error);
      })
    );
  }

  updateUser(id: number, userData: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.baseURL}/${id}`, userData).pipe(
      map((data: IUser) => {
        return data;
      }), catchError(error => {
        return throwError(() => error);
      })
    )
  }

  deleteUser(id: number): Observable<IUser> {
    return this.http.delete<IUser>(`${this.baseURL}/${id}`).pipe(
      map((data: IUser) => {
        return data;
      }), catchError(error => {
        return throwError(() => error);
      })
    )
  }
}
