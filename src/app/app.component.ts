import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { AboutComponent } from './pages/about/about.component';
import { HeroComponent } from './pages/hero/hero.component';
import { GET_ABOUT, GET_ABOUT_SUCCESS, GET_HEADERS, GET_HEADERS_SUCCESS, GET_HERO, GET_IMAGES, GET_JOBS, GET_JOBS_SUCCESS, GET_STUDIES, GET_STUDIES_SUCCESS } from './state/actions/adjcz.action';
import { StudiesComponent } from './pages/studies/studies.component';
import { JobsComponent } from "./pages/jobs/jobs.component";
import { SkillsComponent } from "./pages/skills/skills.component";
import { Actions, ofType } from '@ngrx/effects';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-root',
    imports: [
    CommonModule,
    NzIconModule,
    NgZorroAntdModule,
    MenuComponent,
    HeroComponent,
    FooterComponent,
    AboutComponent,
    StudiesComponent,
    JobsComponent,
    SkillsComponent
],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
    

    private readonly _STORE = inject(Store<any>);
    private readonly _ACTIONS = inject(Actions);
    private readonly _DESTROYREF = inject(DestroyRef);

    constructor() {
        this._ACTIONS.pipe(
            ofType(GET_HEADERS_SUCCESS),
            takeUntilDestroyed(this._DESTROYREF)
        ).subscribe(() => {
            this._STORE.dispatch(GET_ABOUT());
        });

        this._ACTIONS.pipe(
            ofType(GET_ABOUT_SUCCESS),
            takeUntilDestroyed(this._DESTROYREF)
        ).subscribe(() => {
            this._STORE.dispatch(GET_STUDIES());
        });

        this._ACTIONS.pipe(
            ofType(GET_STUDIES_SUCCESS),
            takeUntilDestroyed(this._DESTROYREF)
        ).subscribe(() => {
            this._STORE.dispatch(GET_JOBS());
        });

        this._ACTIONS.pipe(
            ofType(GET_JOBS_SUCCESS),
            takeUntilDestroyed(this._DESTROYREF)
        ).subscribe(() => {
            this._STORE.dispatch(GET_HERO());
        });
    }
    
    ngOnInit() {
        this._STORE.dispatch(GET_HEADERS());
        // this._STORE.dispatch(GET_IMAGES());
    }
}
