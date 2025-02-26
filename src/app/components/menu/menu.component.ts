import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, DestroyRef, HostListener, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { first, Observable } from 'rxjs';
import { IMenu } from '../../interfaces/app.interface';
import { CommonService } from '../../services/common.service';
import { GET_HEADERS, GET_IMAGES, GET_IMAGES_SUCCESS } from '../../state/actions/adjcz.action';
import { selectImages, selectMenuOptions } from '../../state/selectors/app.select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgZorroAntdModule } from '../../ng-zorro-antd.module';
import { RouterModule } from '@angular/router';

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
    menuOptions: any[] = [];
    menuOptions$ = new Observable<IMenu[]>();
    pathImages: { [key: string]: string } = {};
    addBackground: boolean = false;

    private readonly _ACTIONS = inject(Actions);
    private readonly _STORE = inject(Store<any>);
    private readonly _DESTROYREF = inject(DestroyRef);
    private readonly _COMMON = inject(CommonService);
    private readonly _SCROLLER = inject(ViewportScroller);

    @HostListener('window:scroll')
    onScroll(): void {
        this.addBackground = window.scrollY >= 90;
    }
    @HostListener('window:resize', ['$event'])
    resize() {
        this.onResize();
    }

    constructor() {
        this._STORE.select(selectMenuOptions).pipe(
            takeUntilDestroyed(this._DESTROYREF)
        ).subscribe((data: any) => {
            if (data?.length > 0) {
                this.menuOptions = data;
            }
        });

        this._ACTIONS.pipe(
            ofType(GET_IMAGES_SUCCESS),
            takeUntilDestroyed(this._DESTROYREF)
        ).subscribe((action) => {
            action?.response?.map((url: string) => {
                const path = url.split('?')[0];
                const relativeRoutes = path.substring(path.lastIndexOf('/assets/'))
                relativeRoutes?.replaceAll
                this.pathImages[relativeRoutes.replaceAll('/assets/', '')] = url;
            });

            this._STORE.dispatch(GET_HEADERS());
        });
    }

    ngOnInit() {
        this.onResize();
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
