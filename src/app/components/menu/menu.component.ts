import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, DestroyRef, HostListener, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Observable } from 'rxjs';
import * as _ from 'underscore';
import { IMenu } from '../../interfaces/app.interface';
import { NgZorroAntdModule } from '../../ng-zorro-antd.module';
import { CommonService } from '../../services/common.service';
import { GET_HEADERS, GET_IMAGES_SUCCESS } from '../../state/actions/adjcz.action';
import { selectMenuOptions } from '../../state/selectors/app.select';
import { DispatcherServices } from '../../services/dispatchers.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        NzIconModule,
        NgZorroAntdModule,
        RouterModule
    ]
})
export class MenuComponent implements OnInit {

    isMenuOpen = false;

    menuIsOpen: boolean = false;
    menuOptions: IMenu[] = [];
    menuOptions$ = new Observable<IMenu[]>();
    addBackground: boolean = false;
    isMobile = false;

    private readonly _ACTIONS = inject(Actions);
    private readonly _STORE = inject(Store<any>);
    private readonly _DESTROYREF = inject(DestroyRef);
    private readonly _COMMON = inject(CommonService);
    private readonly _SCROLLER = inject(ViewportScroller);
    private readonly _DISPATCH = inject(DispatcherServices);

    @HostListener('window:scroll')
    onScroll(): void {
        this.addBackground = window.scrollY >= 90;
    }
    @HostListener('window:resize', ['$event'])
    resize() {
        this.onResize();
    }

    constructor() {
    }
    
    ngOnInit() {
        this._COMMON.menuOption$.pipe(
            takeUntilDestroyed(this._DESTROYREF)
        ).subscribe({
            next: (data) => {
                if (data?.length === 0) {
                    this._DISPATCH.GET_HEADERS().pipe(
                        takeUntilDestroyed(this._DESTROYREF)
                    ).subscribe({
                        next: (action) => this.handleGetHeadersSuccess(action.response)
                    })
                } else this.handleGetHeadersSuccess(data)
            }
        })
        this.onResize();
    }

    handleGetHeadersSuccess(action: any) {
        this.menuOptions = _.sortBy(action, function (f) {
            return f._id;
        });
    }

    ngAfterContentChecked() {
        this.isMobile = window.innerWidth < 769;
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    navigate(route: string) {
        this._COMMON.navigate(route);
    }

    openMenu() {
        this.menuIsOpen = !this.menuIsOpen;
    }

    onResize() {
        if (window.innerWidth >= 768) {
            this.menuIsOpen = true;
        } else {
            this.menuIsOpen = false;
        }
    }

    scrollTo(route: string): void {
        setTimeout(() => {
            this._SCROLLER.scrollToAnchor(route)
        }, 100)
    }

}
