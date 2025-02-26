import { IAbout, IHero, IMenu, IStudies } from "../../interfaces/app.interface";


export interface CatalogState {
    menu: IMenu[];
    about: IAbout[];
    images: string[];
    hero: IHero[];
    studies: IStudies[];
}