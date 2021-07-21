import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ContactosService } from '../../services/contactos.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Receta } from 'src/app/domain/receta';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  constructor(private router: Router,
    private contactoService: ContactosService,
    public afs: AngularFirestore) { }

    recetas:any
    buscar:any
    nombre:string

  ngOnInit() {
    this.recetas= this.contactoService.getRecetas();
    this.buscar= this.contactoService.buscar("a");
  }
  editar(receta:any){
    let params: NavigationExtras={
      queryParams:{
        receta:receta
      }
    }
    this.router.navigate(["/editar-contacto"], params);
  }
  crear(){
    this.router.navigate(["/crear"]);
  }
  busqueda(){
    this.buscar=this.contactoService.buscar(this.nombre)
  }
}
