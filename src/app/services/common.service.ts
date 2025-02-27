import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAboutData, selectHeroData, selectImages, selectJobs, selectStudies } from '../state/selectors/app.select';
import { IAbout, IHero, IJobs, IStudies } from '../interfaces/app.interface';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    heroData$ = new Observable<IHero[]>();
    aboutData$ = new Observable<IAbout[]>();
    studiesData$ = new Observable<IStudies[]>();
    jobsData$ = new Observable<IJobs[]>();
    imagesUrl$ = new Observable<string[]>();

    private readonly _STORE = inject(Store<any>);
    private readonly _ROUTER = inject(Router);

    constructor() {
        this.initialize();
    }

    initialize() {
        this.heroData$ = this._STORE.select(selectHeroData);
        this.aboutData$ = this._STORE.select(selectAboutData);
        this.studiesData$ = this._STORE.select(selectStudies);
        this.jobsData$ = this._STORE.select(selectJobs);
        this.imagesUrl$ = this._STORE.select(selectImages);
    }
    
    navigate(route: string) {
        this._ROUTER.navigate([route]);
    }
}
