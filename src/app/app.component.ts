import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { HomeComponent } from './components/home/home.component';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { CommonService } from './services/common.service';

@Component({
    selector: 'app-root',
    imports: [
        CommonModule,
        NzIconModule,
        NgZorroAntdModule,
        NzSpinModule,
        HomeComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

    
    private readonly _COMMON = inject(CommonService);

    isLoading = false;

    constructor() {}

    ngOnInit() { }

    // Si showSpinner es un signal, puedes usar un getter para que siempre obtenga el valor actual:
    get isLoadingValue() {
        return this._COMMON.showSpinner();
    }
}
