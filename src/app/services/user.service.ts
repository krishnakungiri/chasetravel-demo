import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

interface IUser {
  firstName: string
  lastName: string
  age: number
}


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

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseURL}/users`)
  }

  updateUser(id: number, userData: IUser): Observable<any> {
    return this.http.put(`${this.baseURL}/users/${id}`, userData).pipe(
      map((data: any) => {
        console.log("return data updated :", data)
        return data
      }), catchError(error => {
        return throwError(() => error);
      })
    )
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/users/${id}`)
  }

}
