import { createSelector } from "@ngrx/store";
import { AppState } from "../states/app.state";
import { CatalogState } from "../states/catalog.state";

export const data = (state: AppState) => state.catalogs;
export const selectHeroData = createSelector(data, (state: CatalogState) => state.hero);
export const selectMenuOptions = createSelector(data, (state: CatalogState) => state.menu);
export const selectAboutData = createSelector(data, (state: CatalogState) => state.about);
export const selectImages = createSelector(data, (state: CatalogState) => state.images);
export const selectStudies = createSelector(data, (state: CatalogState) => state.studies);
export const selectJobs = createSelector(data, (state: CatalogState) => state.jobs);