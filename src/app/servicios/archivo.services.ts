import { Archivo } from '../modelos/archivo.model';
import { Carpeta } from '../modelos/carpeta.model';
import { Contenidos } from '../modelos/contenidos.model';
import {
    A1,
    A10,
    A2,
    A3,
    A4,
    A5,
    A6,
    A7,
    A8,
    A9,
} from '../../assets/mocks/archivos';
import { C1, C2, C3 } from '../../assets/mocks/carpetas';

const archivos: Archivo[] = [A1, A2, A3, A4, A5, A6];
const favoritos: Archivo[] = [A7, A8, A3, A9, A5, A10];

const carpetas: Carpeta[] = [C1, C2, C3];

const contenidos: Contenidos = {
    archivos: archivos,
    carpetas: carpetas,
};

export const getArchivosFavoritosAPI: { (): Promise<Archivo[]> } = async () => {
    // TODO: LLAMADA A API
    return favoritos;
};

export const getArchivosRecientesAPI: { (): Promise<Archivo[]> } = async () => {
    // TODO: LLAMADA A API
    return archivos;
};

export const getContenidosAPI: {
    (idParaAPI: string): Promise<Contenidos>;
} = async idParaAPI => {
    // TODO: LLAMADA A API
    idParaAPI;
    return contenidos;
};

export const setFavoritoAPI: {
    (idArchivo: string, favorito: boolean): void;
} = async (idArchivo, favorito) => {
    // TODO: LLAMADA A API
    idArchivo;
    favorito;
};
