import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser():Observable<any[]> {
    return this.http.get<any[]>('https://api.openbrewerydb.org/breweries').pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))), //Displaying all the data from Server
      catchError(this.handleError)
    );
  }

  getUserById(id:string):Observable<any[]> {
    console.log(id);
    return this.http.get<any[]>(`https://api.openbrewerydb.org/breweries/${id}`);
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
 
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    return throwError(errorMessage);
  }

}
