import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Formacion } from './formacion';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class FormacionService {

  protected url = 'http://localhost:8080/formaciones';



  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getFormaciones(): Observable<Formacion[]> {
    return this.http.get<Formacion[]>(this.url)
      .pipe(
        tap(_ => this.log('fetched formaciones')),
        catchError(this.handleError<Formacion[]>('getFormaciones', []))
      );
  }

  searchFormaciones(term: string): Observable<any> {
    return this.http.get<any>(`${this.url}/search?q=${term}`);
  }

  getFormacionNo404<Data>(id: number): Observable<Formacion> {
    const url = `${this.url}/?id=${id}`;
    return this.http.get<Formacion[]>(url)
      .pipe(
        map(formaciones => formaciones[0]), // returns a {0|1} element array
        tap(f => {
          const outcome = f ? 'fetched' : 'did not find';
          this.log(`${outcome} formacion id=${id}`);
        }),
        catchError(this.handleError<Formacion>(`getFormacion id=${id}`))
      );
  }


  getFormacion(id: number): Observable<Formacion> {
    const url = `${this.url}/${id}`;
    return this.http.get<Formacion>(url).pipe(
      tap(_ => this.log(`fetched formacion id=${id}`)),
      catchError(this.handleError<Formacion>(`getFormacion id=${id}`))
    );
  }




  addFormacion(formacion: Formacion): Observable<any> {
    return this.http.post<Formacion>(this.url, formacion, this.httpOptions).pipe(
      tap(_ => this.log(`added formacion w/ id=${formacion.id}`)),
      catchError(this.handleError<any>('addFormacion'))
    );
  }



  deleteFormacion(id: number): Observable<Formacion> {
    const url = `${this.url}/${id}`;

    return this.http.delete<Formacion>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted formacion id=${id}`)),
      catchError(this.handleError<Formacion>('deleteFormacion'))
    );
  }

  /** PUT: update the hero on the server */
  updateFormacion(formacion: Formacion): Observable<any> {
    return this.http.put(this.url, formacion, this.httpOptions).pipe(
      tap(_ => this.log(`updated formacion id=${formacion.id}`)),
      catchError(this.handleError<any>('updateFormacion'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  
  private log(message: string) {
    console.log(message)
    this.messageService.add(`HeroService: ${message}`);
  }
}
