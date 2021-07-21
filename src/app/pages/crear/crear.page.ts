import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receta } from 'src/app/domain/receta';
import { ContactosService } from '../../services/contactos.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  receta:Receta=new Receta();
  constructor(private contactoService:ContactosService, private router:Router) { }

  ngOnInit() {
  }
  guardar(){
    console.log(this.receta)
    this.receta.vegano=true;
    this.contactoService.save(this.receta)
  }
  regresar(){
    this.router.navigate(["/listar"]);
  }
  
}
