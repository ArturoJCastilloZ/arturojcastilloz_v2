import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NzCardModule } from 'ng-zorro-antd/card';
import { IStudies } from '../../interfaces/app.interface';
import { DispatcherServices } from '../../services/dispatchers.service';
import { CommonService } from '../../services/common.service';

@Component({
    selector: 'app-studies',
    templateUrl: './studies.component.html',
    styleUrls: ['./studies.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        NzCardModule
    ]
})
export class StudiesComponent implements OnInit {

    studiesData: IStudies[] = [];

    private readonly _DISPATCH = inject(DispatcherServices);
    private readonly _DESTROYREF = inject(DestroyRef);
    private readonly _COMMON = inject(CommonService);

    constructor() {
    }

    ngOnInit() {
        this._COMMON.studiesData$.pipe(
            takeUntilDestroyed(this._DESTROYREF),
        ).subscribe({
            next: (data) => {
                if (data?.length === 0) {
                    this._DISPATCH.GET_STUDIES().pipe(
                        takeUntilDestroyed(this._DESTROYREF)
                    ).subscribe({
                        next: (action) => this.handleGetStudiesSuccess(action.response)
                    });
                } else this.handleGetStudiesSuccess(data)
            } 
        })
    }

    handleGetStudiesSuccess(action: any) {
        this.studiesData = action;
    }

}
