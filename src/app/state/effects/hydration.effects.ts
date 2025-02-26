import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType, OnInitEffects } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { distinctUntilChanged, map, switchMap, tap } from "rxjs";
import { hydrate, hydrateFailure, hydrateSuccess } from "../actions/hydration.action";
import { AppState } from "../states/app.state";

@Injectable()
export class HydrationEffects implements OnInitEffects {
    private readonly _ACTIONS = inject(Actions);
    private readonly _STORE = inject(Store<AppState>);

    HYDRATE$ = createEffect(() =>
        this._ACTIONS.pipe(
            ofType(hydrate),
            map(() => {
                const storageValue = localStorage.getItem('state');
                if (storageValue) {
                    try {
                        const state = JSON.parse(storageValue);
                        return hydrateSuccess({ state });
                    } catch {
                        localStorage.removeItem('state');
                    }
                }
                return hydrateFailure();
            }),
        ),
    );

    serialize$ = createEffect(
        () =>
            this._ACTIONS.pipe(
                ofType(hydrateSuccess, hydrateFailure),
                switchMap(() => this._STORE),
                distinctUntilChanged(),
                tap((state) => localStorage.setItem('state', JSON.stringify(state))),
            ),
        { dispatch: false },
    );

    ngrxOnInitEffects(): Action {
        return hydrate();
    }
}