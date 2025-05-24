import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAboutData, selectHeroData, selectImages, selectJobs, selectMenuOptions, selectStudies } from '../state/selectors/app.select';
import { IAbout, IHero, IJobs, IMenu, IStudies } from '../interfaces/app.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    heroData$ = new Observable<IHero[]>();
    aboutData$ = new Observable<IAbout[]>();
    studiesData$ = new Observable<IStudies[]>();
    jobsData$ = new Observable<IJobs[]>();
    imagesUrl$ = new Observable<string[]>();
    menuOption$ = new Observable<IMenu[]>();
    pathImages: { [key: string]: string } = {};
    showSpinner = signal<boolean>(false);

    footerOptions = [
        {
            Url: "mailto:castillo.arturo93@hotmail.com",
            Titulo: "Contáctame",
            Icono: "bi bi-envelope-at-fill",
            Color: "#e3d002",
            _id: 1
        },
        {
            Url: "https://github.com/ArturoJCastilloZ?tab=repositories",
            Titulo: "Mis Repos",
            Icono: "bi bi-github",
            Color: "#ff8000",
            _id: 3
        },
        {
            Url: "https://www.linkedin.com/in/arturojcastilloz/",
            Titulo: "Mi LinkedIn",
            Icono: "bi bi-linkedin",
            Color: "#0072b1",
            _id: 2
        },
        {
            Url: "/assets/resume.pdf", // Ruta al archivo PDF en la carpeta assets
            Titulo: "Descargar CV",
            Icono: "bi bi-file-earmark-pdf-fill", // Icono de PDF
            Color: "#ff0000", // Color rojo (puedes cambiarlo)
            _id: 4
        }
    ];

    private readonly _STORE = inject(Store<any>);
    private readonly _ROUTER = inject(Router);
    private readonly _DESTROYREF = inject(DestroyRef);

    constructor() {
        this.initialize();
    }

    initialize() {
        this.heroData$ = this._STORE.select(selectHeroData);
        this.aboutData$ = this._STORE.select(selectAboutData);
        this.studiesData$ = this._STORE.select(selectStudies);
        this.jobsData$ = this._STORE.select(selectJobs);
        this.imagesUrl$ = this._STORE.select(selectImages);
        this.menuOption$ = this._STORE.select(selectMenuOptions);

        this._STORE.select(selectImages).pipe(
            takeUntilDestroyed(this._DESTROYREF)
        ).subscribe((data) => {
            data.map((url: string) => {
                const path = url.split('?')[0]; // Eliminar los parámetros
                const relativeRoutes = path.substring(path.lastIndexOf('/assets/'))
                relativeRoutes?.replaceAll
                this.pathImages[relativeRoutes.replaceAll('/assets/', '')] = url;
            })
        });
    }

    shouldShowSpinner(isLoading: boolean) {
        this.showSpinner.set(isLoading);
    }
    
    navigate(route: string) {
        this._ROUTER.navigate([route]);
    }
}
