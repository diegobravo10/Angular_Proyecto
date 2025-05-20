import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactosService } from '../services/contactos.service';

@Component({
  selector: 'app-holaups',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './holaups.component.html',
  styleUrl: './holaups.component.css'
})
export class HolaupsComponent implements OnInit {
  texto: string = 'Programación';

  nombre: string = '';
  direccion: string = '';
  personas: any[] = [];
  editandoIndex: number | null = null;

  contactos: any;

   constructor(private contactosServeices: ContactosService){
      
  }

  async cargarContactos() {
  this.personas = await this.contactosServeices.getContactos();
}

  async ngOnInit() {
    //const datos = localStorage.getItem("datos");
    //this.personas = datos ? JSON.parse(datos) : [];

    this.personas =  await this.contactosServeices.getContactos();

  }

 async guardar() {
  const registro = { nombre: this.nombre, direccion: this.direccion };

  if (this.editandoIndex !== null) {
    const id = this.personas[this.editandoIndex].id;

    // Actualiza en Firebase
    await this.contactosServeices.editarContacto(id, this.nombre, this.direccion);

    // Actualiza localmente
    this.personas[this.editandoIndex] = { id, ...registro };
    this.editandoIndex = null;
  } else {
    // Agrega localmente
    //this.personas.push(registro);

    // Agrega en Firebase
    await this.contactosServeices.addContacto(this.nombre, this.direccion);
    await this.cargarContactos();
  }

  // Opcional: sincronizar con localStorage
  //localStorage.setItem('datos', JSON.stringify(this.personas));

  // Limpiar campos
  this.nombre = '';
  this.direccion = '';
}


  async eliminar(index: number) {
    const contacto = this.personas[index];

    if(contacto.id){
      await this.contactosServeices.eliminarContacto(contacto.id);
      await this.cargarContactos();
    }

   

      //this.personas.splice(index, 1);
      //localStorage.setItem('datos', JSON.stringify(this.personas));

  }

  editar(index: number) {
    const persona = this.personas[index];
    this.nombre = persona.nombre;
    this.direccion = persona.direccion;
    this.editandoIndex = index;
  }
}
