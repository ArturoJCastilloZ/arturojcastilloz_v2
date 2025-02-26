import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { catalogReducer } from "../reducer/app.reducer";
import { hydrationMetaReducer } from "../reducer/hydration.reducer";
import { CatalogState } from "./catalog.state";

export interface AppState {
    catalogs: CatalogState
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
    catalogs: catalogReducer
}

export const metaReducers: MetaReducer[] = [hydrationMetaReducer]