import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from "../menu/menu.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [
    RouterModule,
    CommonModule,
    MenuComponent,
    FooterComponent
]
})
export class HomeComponent implements OnInit {

    menuIsOpen = false;

    constructor() { }

    ngOnInit() {
    }

}
