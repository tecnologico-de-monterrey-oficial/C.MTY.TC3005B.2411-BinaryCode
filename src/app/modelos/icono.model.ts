import { icono_amarillo, icono_azul, icono_azul_claro, icono_morado, icono_naranja, icono_rojo, icono_rosa, icono_verde } from "../../assets/colores";

export class Icono {
    nombre: string;
    color: string;
    
    constructor(nombre: string, color: string) {
        this.nombre = nombre;
        this.color = color;
    }
}

export const fileIcons = {
    excel: new Icono("file-excel", icono_verde),
    jpg: new Icono("file-jpg", icono_morado),
    pdf: new Icono("file-pdf", icono_rojo),
    ppt: new Icono("file-ppt", icono_naranja),
    word: new Icono("file-word", icono_azul),
    solidWorks: new Icono("code-sandbox", icono_rosa),
    gif: new Icono("file-gif", icono_amarillo),
    image: new Icono("file-image", icono_azul_claro),

    text: "file-text",
    unknown: "file-unknown",
    empty: "file",
}

