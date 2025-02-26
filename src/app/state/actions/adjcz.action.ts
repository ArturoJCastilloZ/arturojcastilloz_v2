import { createAction, props } from "@ngrx/store";
import { IAbout, IHero, IMenu, IStudies } from "../../interfaces/app.interface";

export const GET_HERO = createAction(
    '[HERO] GET_HERO'
);

export const GET_HERO_SUCCESS = createAction(
    '[HERO] GET_HERO_SUCCESS',
    props<{ response: IHero[] }>()
);

export const GET_HERO_ERROR = createAction(
    '[HERO] GET_HERO_ERROR',
    props<{ error: any }>()
);

export const GET_HEADERS = createAction(
    '[MENU] GET_HEADERS'
);

export const GET_HEADERS_SUCCESS = createAction(
    '[MENU] GET_HEADERS_SUCCESS',
    props<{ response: IMenu[] }>()
);

export const GET_HEADERS_ERROR = createAction(
    '[MENU] GET_HEADERS_ERROR',
    props<{ error: any }>()
);

export const GET_ABOUT = createAction(
    '[ABOUT] GET_ABOUT'
);

export const GET_ABOUT_SUCCESS = createAction(
    '[ABOUT] GET_ABOUT_SUCCESS',
    props<{ response: IAbout[] }>()
);

export const GET_ABOUT_ERROR = createAction(
    '[ABOUT] GET_ABOUT_ERROR',
    props<{ error: any }>()
);

export const GET_IMAGES = createAction(
    '[IMAGES] GET_IMAGES'
);

export const GET_IMAGES_SUCCESS = createAction(
    '[IMAGES] GET_IMAGES_SUCCESS',
    props<{ response: any }>()
);

export const GET_IMAGES_ERROR = createAction(
    '[IMAGES] GET_IMAGES_ERROR',
    props<{ error: any }>()
);

export const GET_STUDIES = createAction(
    '[STUDIES] GET_STUDIES'
);

export const GET_STUDIES_SUCCESS = createAction(
    '[STUDIES] GET_STUDIES_SUCCESS',
    props<{ response: IStudies[] }>()
);

export const GET_STUDIES_ERROR = createAction(
    '[STUDIES] GET_STUDIES_ERROR',
    props<{ error: any }>()
);