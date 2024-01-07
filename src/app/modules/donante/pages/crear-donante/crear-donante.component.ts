import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { DonanteService } from '../../services/donante.service';

@Component({
  selector: 'app-crear-donante',
  templateUrl: './crear-donante.component.html',
  styleUrls: ['./crear-donante.component.scss']
})
export class CrearDonanteComponent {
  donante = {
    nombre: '',
    apellido: '',
    email: '',
    celular: ''
  };

  constructor(
    private donanteService: DonanteService,
    private dialogRef: MatDialogRef<CrearDonanteComponent>
  ) {}

  

  agregarDonante(form: NgForm) {
    if (form.valid) {
      const nuevoDonante = {
        identificationTypeId: 1,
        firstName: this.donante.nombre,
        lastName: this.donante.apellido,
        email: this.donante.email,
        phoneNumber: this.donante.celular
        // Agrega otros campos si son necesarios
      };
      this.donanteService.addDonante(nuevoDonante).subscribe(
        data => {
          console.log('Donante creado', data);
          this.donanteService.donanteFueCreado(); // Emitir evento de donante creado
          this.dialogRef.close();
        },
        error => {
          console.error(error);
          this.dialogRef.close(false); // Cerrar el diálogo sin recargar si hay un error
        }
      );
    } else {
      this.dialogRef.close(false); // Cerrar el diálogo sin recargar si el formulario no es válido
    }
  }
  
  
  
}
