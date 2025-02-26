import { IAbout, IHero, IMenu } from "../../interfaces/app.interface";


export interface CatalogState {
    menu: IMenu[];
    about: IAbout[];
    images: string[];
    hero: IHero[];
}