import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, finalize } from 'rxjs';
import { AuthService } from '../../auth';
import { URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>;
  
  constructor(
    private http: HttpClient,
    public authService: AuthService,
  ) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }

  listUser()
  {
    let headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.authService.token,
    });
    
    let URL = URL_SERVICIOS + '/user';
    this.isLoadingSubject.next(true);
    return this.http.get(URL, {headers:headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  registerUser(data: FormData)
  {
    let headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.authService.token,
    });
    
    let URL = URL_SERVICIOS + '/user';
    this.isLoadingSubject.next(true);
    return this.http.post(URL, data, {headers:headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }
}
