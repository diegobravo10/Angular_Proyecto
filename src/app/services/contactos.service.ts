import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore, getDocs } from '@angular/fire/firestore';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(
    private firestore: Firestore
  ) { }

  addContacto(nombre: string, direccion: string){
    addDoc(collection(this.firestore, 'contactos'), {
      'nombre': nombre,
      'direccion': direccion
    })

  }

  async getContactos(){
    const contactosSnapshot = await getDocs(collection(this.firestore,'contactos')) 
    return contactosSnapshot.docs.map(doc => ({id: doc.id,...doc.data()}))
  }


  async eliminarContacto(id: string) {
  const contactoRef = doc(this.firestore, 'contactos', id);
  await deleteDoc(contactoRef);
}

  async editarContacto(id: string, nombre: string, direccion: string) {
  const contactoRef = doc(this.firestore, 'contactos', id);
  await updateDoc(contactoRef, {
    nombre: nombre,
    direccion: direccion
  });
}

}
