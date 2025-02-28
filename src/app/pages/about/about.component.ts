import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { GET_ABOUT, GET_IMAGES, GET_IMAGES_SUCCESS } from '../../state/actions/adjcz.action';
import { first, Observable } from 'rxjs';
import { IAbout } from '../../interfaces/app.interface';
import { selectAboutData, selectImages } from '../../state/selectors/app.select';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { CommonService } from '../../services/common.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: true,
    imports: [
        CommonModule,
    ]
})
export class AboutComponent implements OnInit {
    aboutData$ = new Observable<IAbout[]>();
    aboutData: IAbout[] = [];
    srcImage: string = '';
    profesion: string = '';

    private readonly _STORE = inject(Store<any>);
    private readonly _DESTROYREF = inject(DestroyRef);
    public readonly _COMMON = inject(CommonService);

    constructor() {
        this._COMMON.aboutData$.pipe(
            takeUntilDestroyed(this._DESTROYREF)
        ).subscribe((data) => {
            if (data?.length > 0) {
                this.aboutData = data;
                this.srcImage = this.aboutData[0]?.Imagen;
                this.profesion = this.aboutData[0]?.Profesion;
            }
        });
        
    }

    ngOnInit() {
        this._STORE.dispatch(GET_ABOUT());
    }

}
