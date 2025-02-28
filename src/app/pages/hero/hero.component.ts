import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { act, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CommonService } from '../../services/common.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { take } from 'rxjs';
import { GET_ABOUT, GET_HERO } from '../../state/actions/adjcz.action';
import { IAbout, IHero } from '../../interfaces/app.interface';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
    userDescription: IHero[] = [];
    career: string = '';
    private readonly _STORE = inject(Store<any>);
    private readonly _COMMON = inject(CommonService);
    private readonly _DESTROYREF = inject(DestroyRef);

    constructor() {
        this._COMMON.aboutData$?.pipe(
            takeUntilDestroyed(this._DESTROYREF)
        ).subscribe((data) => {
            if (data?.length > 0) {
                data?.map((data: IAbout) => this.career = data?.Profesion);
            }
        });

        this._COMMON.heroData$?.pipe(
            takeUntilDestroyed(this._DESTROYREF)
        ).subscribe((data) => {
            if (data?.length > 0) {
                this.userDescription = data;
            }
        });
    }

    ngOnInit() {
        
    }
 }
