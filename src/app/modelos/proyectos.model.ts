export class Proyecto {
  id: string;
  nombre: string;
  urlImagen: string;
  color: string;
  descripcion: string;

  constructor(id: string, nombre: string, urlImagen: string, color: string, descripcion: string) {
    this.id = id;
    this.nombre = nombre;
    this.urlImagen = urlImagen;
    this.color = color;
    this.descripcion = descripcion;
  }

}
