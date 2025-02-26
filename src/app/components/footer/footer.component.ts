import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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

    footerOptions = [
        {
            Url: "mailto:castillo.arturo93@hotmail.com",
            Titulo: "Comúnicate conmigo",
            Icono: "FaMailBulk",
            Color: "#e3d002",
            _id: 1
        },
        {
            Url: "https://github.com/ArturoJCastilloZ?tab=repositories",
            Titulo: "Mis Reposssss",
            Icono: "FaGithub",
            Color: "#ff8000",
            _id: 3
        },
        {
            Url: "https://www.linkedin.com/in/castillo93/",
            Titulo: "Mi LinkedIn",
            Icono: "FaLinkedin",
            Color: "#0072b1",
            _id: 2
        }
    ]

    constructor() { }

    ngOnInit() {
        this.footerOptions?.map((data) => console.log(data.Titulo))
    }

}
