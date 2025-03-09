import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { combineLatest } from 'rxjs';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { AboutComponent } from './pages/about/about.component';
import { HeroComponent } from './pages/hero/hero.component';
import { JobsComponent } from "./pages/jobs/jobs.component";
import { SkillsComponent } from "./pages/skills/skills.component";
import { StudiesComponent } from './pages/studies/studies.component';
import { GET_ABOUT, GET_ABOUT_SUCCESS, GET_HEADERS, GET_HEADERS_SUCCESS, GET_HERO, GET_JOBS, GET_JOBS_SUCCESS, GET_STUDIES, GET_STUDIES_SUCCESS } from './state/actions/adjcz.action';
import * as AOS from "aos";

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
        SkillsComponent,
        NzSpinModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

    isLoading: boolean = true;

    private readonly _STORE = inject(Store<any>);
    private readonly _ACTIONS = inject(Actions);
    private readonly _DESTROYREF = inject(DestroyRef);

    constructor() {
        combineLatest([
            this._ACTIONS.pipe(ofType(GET_HEADERS_SUCCESS)),
            this._ACTIONS.pipe(ofType(GET_ABOUT_SUCCESS)),
            this._ACTIONS.pipe(ofType(GET_STUDIES_SUCCESS)),
            this._ACTIONS.pipe(ofType(GET_JOBS_SUCCESS))
        ]).pipe(takeUntilDestroyed(this._DESTROYREF)).subscribe((action: any) => {
            this.isLoading = false;
        })
    }

    ngOnInit() {
        AOS.init();
        this._STORE.dispatch(GET_HEADERS());
        this._STORE.dispatch(GET_ABOUT());
        this._STORE.dispatch(GET_STUDIES());
        this._STORE.dispatch(GET_JOBS());
        this._STORE.dispatch(GET_HERO());
        // this._STORE.dispatch(GET_IMAGES());
    }
}
