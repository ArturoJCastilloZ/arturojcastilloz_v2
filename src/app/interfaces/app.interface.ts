export interface ICatalog {
    menu: IMenu[];
    about: IAbout[];
}

export interface IAbout {
    Profesion: string;
    Imagen: string;
    Descripcion: string;
}

export interface IMenu {
    Enlace: string;
    Titulo: string;
    Offset: number;
    _id: number;
}

export interface IHero {
    Saludo: string;
    Ciudad: string;
    Municipio: string;
    Presentacion: string;
    Puesto: string;
}

export interface IStudies {
    Fin: string;
    Titulo: string;
    Inicio: string;
    _id: number;
    Escuela: string;
}

export interface IJobs {
    Fin: string;
    Empresa: string;
    Actividades: string;
    Inicio: string;
    _id: number;
    Puesto: string;
}