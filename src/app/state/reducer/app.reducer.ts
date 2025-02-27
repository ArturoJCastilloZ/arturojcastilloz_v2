import { createReducer, on } from "@ngrx/store";
import { GET_ABOUT_SUCCESS, GET_HEADERS_SUCCESS, GET_HERO_SUCCESS, GET_IMAGES_SUCCESS, GET_JOBS_SUCCESS, GET_STUDIES_SUCCESS } from "../actions/adjcz.action";
import { CatalogState } from "../states/catalog.state";

export const initialState: CatalogState = {
    menu: [],
    about: [],
    images: [],
    hero: [],
    studies: [],
    jobs: []
}

export const catalogReducer = createReducer(
    initialState,
    on(GET_HEADERS_SUCCESS, (state, {response}) => ({
        ...state,
        menu: response
    })),
    on(GET_ABOUT_SUCCESS, (state, {response}) => ({
        ...state,
        about: response
    })),
    on(GET_IMAGES_SUCCESS, (state, {response}) => ({
        ...state,
        images: response
    })),
    on(GET_HERO_SUCCESS, (state, {response}) => ({
        ...state,
        hero: response
    })),
    on(GET_STUDIES_SUCCESS, (state, {response}) => ({
        ...state,
        studies: response
    })),
    on(GET_JOBS_SUCCESS, (state, {response}) => ({
        ...state,
        jobs: response
    })),
);