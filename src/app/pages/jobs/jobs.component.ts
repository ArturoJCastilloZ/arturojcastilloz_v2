import { CommonModule } from '@angular/common';
import { AfterContentChecked, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { CommonService } from '../../services/common.service';
import { GET_JOBS } from '../../state/actions/adjcz.action';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IJobs } from '../../interfaces/app.interface';
import * as _ from 'underscore';

@Component({
    selector: 'app-jobs',
    templateUrl: './jobs.component.html',
    styleUrl: './jobs.component.css',
    standalone: true,
    imports: [
        CommonModule,
        NzTimelineModule
    ]
})
export class JobsComponent implements OnInit, AfterContentChecked {

    jobsData: IJobs[] = [];
    isMobile = false;


    private readonly _STORE = inject(Store<any>);
    private readonly _COMMON = inject(CommonService);
    private readonly _DESTROYREF = inject(DestroyRef);

    constructor() {
        this._COMMON.jobsData$?.pipe(
            takeUntilDestroyed(this._DESTROYREF)
        ).subscribe((data) => {
            if (data?.length > 0) {
                this.jobsData = _.sortBy(data, function (f) {
                    return f._id
                }).reverse();
            }
        })
    }

    ngOnInit() {
        this._STORE.dispatch(GET_JOBS());
    }

    ngAfterContentChecked() {
        this.isMobile = window.innerWidth < 769;
    }
}
