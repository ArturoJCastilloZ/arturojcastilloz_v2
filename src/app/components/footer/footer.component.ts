import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    standalone: true,
    imports: [
        CommonModule
    ]
})
export class FooterComponent implements OnInit {

    public readonly _COMMON = inject(CommonService);

    constructor() { }

    ngOnInit() {
        // this.footerOptions?.map((data) => console.log(data.Titulo))
    }

}
