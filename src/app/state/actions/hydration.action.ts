import { createAction, props } from "@ngrx/store";
import { AppState } from "../states/app.state";

export const hydrate = createAction('[HYDRATION] Hydrate');

export const hydrateSuccess = createAction(
    '[HYDRATION] Hydrate success',
    props<{ state: AppState }>(),
);

export const hydrateFailure = createAction('[HYDRATION] Hydrate Failure');