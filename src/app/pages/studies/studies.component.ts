import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CommonService } from '../../services/common.service';
import { GET_STUDIES } from '../../state/actions/adjcz.action';
import { IStudies } from '../../interfaces/app.interface';

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

    private readonly _ACTIONS = inject(Actions);
    private readonly _STORE = inject(Store<any>);
    private readonly _COMMON = inject(CommonService);

    constructor() {
        this._COMMON.studiesData$.subscribe((data) => {
            if (data?.length > 0) {
                this.studiesData = data;
            }
        });
    }

    ngOnInit() {
        
    }

}
