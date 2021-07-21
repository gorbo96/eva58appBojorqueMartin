import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Receta } from '../domain/receta';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(public afs: AngularFirestore) { }
  save(receta:Receta){
    const refReceta = this.afs.collection("recetas"); //Adentro de los parentecis hacemos una referencia a la coleccion que queremos
                                 //Si no existe la coleccion se crea de manera automatica
    if (receta.uid == null){
      receta.uid = this.afs.createId(); // esta linea es para crear el id      
    }

    refReceta.doc(receta.uid).set(Object.assign({}, receta)); // esta linea es para guardar
  }
  getRecetas():Observable<any[]>{
    return this.afs.collection("recetas",
            ref=> ref.where("vegano","==",true)).valueChanges();
  }
  buscar(nombre:string):Observable<any[]>{
    return this.afs.collection("recetas",
            ref=> ref.where("nombre",">=",nombre)).valueChanges();
  }
}
