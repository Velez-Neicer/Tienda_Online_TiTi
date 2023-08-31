import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // Indicar que el servicio es proporcionado en el nivel raíz
})
export class DataSharingService {
  private messageSource = new BehaviorSubject('default message'); // Crear un BehaviorSubject con un valor inicial
  currentMessage = this.messageSource.asObservable(); // Observable que permite a los componentes suscribirse a cambios

  constructor() {
    // Constructor del servicio
  }

  changeMessage(message: string) {
    // Método para cambiar el mensaje compartido
    this.messageSource.next(message); // Emitir un nuevo valor a través del BehaviorSubject
  }
}
