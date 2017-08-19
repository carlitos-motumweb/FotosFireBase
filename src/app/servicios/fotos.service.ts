import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { FileItem } from '../modelo/file-item';
import * as firebase from "firebase/app";

@Injectable()
export class FotosService {
    private CARPETA_IMAGENES: string = 'img';

  constructor(public af: AngularFireDatabase) { }

  listaUltimasImagenes(numeroImg: number): FirebaseListObservable<any[]> {
      return this.af.list('/${this.CARPETA_IMAGENES}', {
          query: {
              limitToLast: numeroImg
          }
      })
  }

  preparImagenes(archivos: FileItem[]){
      console.log(archivos);
  }

  private guardarImagen(imagen: any){
      this.af.list('${this.CARPETA_IMAGENES}').push(imagen);
  }

}
