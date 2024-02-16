import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, finalize } from 'rxjs';
import { AuthService } from '../../auth';
import { URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  isLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>;
  
  constructor(
    private http: HttpClient,
    public authService: AuthService,
  ) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }

  listRoles()
  {
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({"Authorization": "Bearer "+this.authService.token});

    let URL = URL_SERVICIOS+"/role";
    return this.http.get(URL, {headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  registerRoles(data: any){
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({"Authorization": "Bearer "+this.authService.token});

    let URL = URL_SERVICIOS+"/role";
    return this.http.post(URL, data, {headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  updateRole(data: any, role_id: any){
    let headers = new HttpHeaders({"Authorization": "Bearer "+this.authService.token});
    
    this.isLoadingSubject.next(true);
    let URL = URL_SERVICIOS+'/role/'+ role_id;
    return this.http.post(URL, data, {headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  deleteRole(role_id: any ){
    let headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.authService.token,
    });
    let URL = URL_SERVICIOS + '/role/'+ role_id;
    this.isLoadingSubject.next(true);
    return this.http.delete(URL, {headers:headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }
}
