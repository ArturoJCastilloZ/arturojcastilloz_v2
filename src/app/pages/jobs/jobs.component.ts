import { CommonModule } from '@angular/common';
import { AfterContentChecked, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import * as _ from 'underscore';
import { IJobs } from '../../interfaces/app.interface';
import { CommonService } from '../../services/common.service';
import { DispatcherServices } from '../../services/dispatchers.service';

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

    private readonly _DESTROYREF = inject(DestroyRef);
    private readonly _DISPATCH = inject(DispatcherServices);
    private readonly _COMMON = inject(CommonService);

    constructor() {
    }

    ngOnInit() {
        this._COMMON.jobsData$.pipe(
            takeUntilDestroyed(this._DESTROYREF),
        ).subscribe({
            next: (data) => {
                if (data?.length === 0) {
                    this._DISPATCH.GET_JOBS().pipe(
                        takeUntilDestroyed(this._DESTROYREF)
                    ).subscribe({
                        next: (action) => this.handleGetJobsSuccess(action.response)
                    });
                } else this.handleGetJobsSuccess(data)
            }
        })
    }

    handleGetJobsSuccess(action: any) {
        this.jobsData = _.sortBy(action, function (f) {
            return f._id
        }).reverse();
    }

    ngAfterContentChecked() {
        this.isMobile = window.innerWidth < 769;
    }
}
