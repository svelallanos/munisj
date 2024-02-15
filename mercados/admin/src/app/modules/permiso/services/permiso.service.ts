import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, finalize } from 'rxjs';
import { AuthService } from '../../auth';
import { URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root',
})
export class PermisoService {
  isLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>;

  constructor(private http: HttpClient, public authService: AuthService) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }

  listPermisos(search:string, state:string) {
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({"Authorization": "Bearer "+this.authService.token});
    let LINK = "?T=";

    if(search) {
      LINK += "&search="+search;
    }

    if(state) {
      LINK += "&state="+state;
    }

    let URL = URL_SERVICIOS+"/permiso"+LINK
    return this.http.get(URL, {headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  registerPermiso(data: any) {
    let headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.authService.token,
    });
    let URL = URL_SERVICIOS + '/permiso';
    this.isLoadingSubject.next(true);
    return this.http.post(URL, data, {headers:headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  updatePermiso(data: any, permiso_id:string) {
    let headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.authService.token,
    });
    let URL = URL_SERVICIOS + '/permiso/'+permiso_id;
    this.isLoadingSubject.next(true);
    return this.http.post(URL, data, {headers:headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

    deletePermiso(permiso_id: string) {
    let headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.authService.token,
    });
    let URL = URL_SERVICIOS + '/permiso/'+permiso_id;
    this.isLoadingSubject.next(true);
    return this.http.delete(URL, {headers:headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }
}
