import { inject, Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { take } from "rxjs";
import { GET_ABOUT, GET_ABOUT_SUCCESS, GET_HEADERS, GET_HEADERS_SUCCESS, GET_HERO, GET_HERO_SUCCESS, GET_JOBS, GET_JOBS_SUCCESS, GET_STUDIES, GET_STUDIES_SUCCESS } from "../state/actions/adjcz.action";
import { CommonService } from "./common.service";

@Injectable({
    providedIn: 'root'
})
export class DispatcherServices {

    private readonly _ACTIONS = inject(Actions);
    private readonly _STORE = inject(Store<any>);
    private readonly _COMMON = inject(CommonService);

    GET_HEADERS() {
        this._COMMON.shouldShowSpinner(true);
        this._STORE.dispatch(GET_HEADERS());
        return this._ACTIONS.pipe(ofType(GET_HEADERS_SUCCESS), take(1));
    }

    GET_ABOUT() {
        this._COMMON.shouldShowSpinner(true);
        this._STORE.dispatch(GET_ABOUT());
        return this._ACTIONS.pipe(ofType(GET_ABOUT_SUCCESS), take(1));
    }

    GET_STUDIES() {
        this._COMMON.shouldShowSpinner(true);
        this._STORE.dispatch(GET_STUDIES());
        return this._ACTIONS.pipe(ofType(GET_STUDIES_SUCCESS), take(1));
    }

    GET_JOBS() {
        this._COMMON.shouldShowSpinner(true);
        this._STORE.dispatch(GET_JOBS());
        return this._ACTIONS.pipe(ofType(GET_JOBS_SUCCESS), take(1));
    }

    GET_HERO() {
        this._COMMON.shouldShowSpinner(true);
        this._STORE.dispatch(GET_HERO());
        return this._ACTIONS.pipe(ofType(GET_HERO_SUCCESS), take(1));
    }
}