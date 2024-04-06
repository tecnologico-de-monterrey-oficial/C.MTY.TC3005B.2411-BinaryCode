// TODO: Parametros que delimitar
// Qué tan largo puede ser el nombre de una unidad
// Hay límites en el tamaño de la imagen?

export class Unidad {
  nombre: string;
  urlImagen: string;
  color: string;

  constructor(nombre: string, urlImagen: string, color: string) { 
    this.nombre = nombre;
    this.urlImagen = urlImagen;
    this.color = color;
  }
}