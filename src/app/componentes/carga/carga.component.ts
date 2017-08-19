import { Component, OnInit } from '@angular/core';
import { FotosService } from '../../servicios/fotos.service';
import { FileItem } from '../../modelo/file-item';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

    estaSobreDropZone: boolean = false;
    permiteCargar: boolean = true;
    archivos: FileItem[] = [];

  constructor(public fotosSRV: FotosService) { }

  ngOnInit() {
  }

  cargarImagenesAFireBase(){
      console.log('se deben cargar imagenes');
  }

  limpiarArchivos(){
      console.log('se debe limpiar la lista de archivos');
  }

}
