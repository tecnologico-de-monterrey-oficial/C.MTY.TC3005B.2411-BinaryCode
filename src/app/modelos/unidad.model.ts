// TODO: Parametros que delimitar
// Qué tan largo puede ser el nombre de una unidad
// Hay límites en el tamaño de la imagen?

export class Unidad {
  id: string;
  nombre: string;
  urlImagen: string;
  color: string;

  constructor(id: string, nombre: string, urlImagen: string, color: string) { 
    this.id = id;
    this.nombre = nombre;
    this.urlImagen = urlImagen;
    this.color = color;
  }
}