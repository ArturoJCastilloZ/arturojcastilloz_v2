import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { AboutComponent } from './pages/about/about.component';
import { HeroComponent } from './pages/hero/hero.component';
import { GET_IMAGES } from './state/actions/adjcz.action';
import { StudiesComponent } from './pages/studies/studies.component';
import { JobsComponent } from "./pages/jobs/jobs.component";
import { SkillsComponent } from "./pages/skills/skills.component";

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
    SkillsComponent
],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
    

    private readonly _STORE = inject(Store<any>);

    constructor() { }
    
    ngOnInit() {

        // this._STORE.dispatch(GET_IMAGES());
    }
}
