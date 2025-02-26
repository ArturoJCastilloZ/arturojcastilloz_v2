import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, map, Observable, retry } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private readonly _HTTP = inject(HttpClient);
    private readonly _ROUTER = inject(Router);

    GET(endpoint: string, parameters?: any[]): Observable<any> {
        let _headers = new HttpHeaders({
            'content-type': 'application/json',
            accept: 'application/json',
        });
        let _params = new HttpParams();
        if (parameters != null && parameters?.length > 0)
            parameters?.forEach((param) => {
                _params = _params.append(param?.name, param?.value);
            });
        return this._HTTP.get(endpoint, { headers: _headers, params: _params }).pipe(
            retry(2),
            map((res: any) => {
                return res;
            }),
            catchError((error: any) => {
                return error
            })
        );
    };
}