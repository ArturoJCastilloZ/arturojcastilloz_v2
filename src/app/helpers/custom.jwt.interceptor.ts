import type { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable()
export class CustomJwtInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        return next.handle(req).pipe(
            tap({
                next: (event: HttpEvent<any>) => {
                    // TODO: aqui va el hide spinner
                }
            })
        )
    }
}