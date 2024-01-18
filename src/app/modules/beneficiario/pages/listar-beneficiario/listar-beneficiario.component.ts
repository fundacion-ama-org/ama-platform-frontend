import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormularioBeneficiarioComponent } from '../../components/formulario-beneficiario/formulario-beneficiario.component';
import Swal from 'sweetalert2';
import { BeneficiarioService } from '../../services/beneficiario.service';
import { ActionsEmit, DataTableHeader } from '../../../../shared/interfaces/datatable.interface';

@Component({
  selector: 'app-listar-beneficiario',
  templateUrl: './listar-beneficiario.component.html',
  styleUrl: './listar-beneficiario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarBeneficiarioComponent {



  constructor(private _matDialog: MatDialog, private _service: BeneficiarioService) { }
  public columns: DataTableHeader[] = [
    {
      nameColumn: 'nombre_beneficiario',
      title: 'Nombre'
    },
    {
      nameColumn: 'apellido_beneficiario',
      title: 'Apellido'
    },
    {
      nameColumn: 'direccion',
      title: 'Dirección'
    },
    {
      nameColumn: 'tipo_ayuda',
      title: 'Tipo ayuda'
    },
    {
      nameColumn: 'correo',
      title: 'Correo'
    },
    {
      nameColumn: 'telefono',
      title: 'Telefono'
    },
    {
      nameColumn: 'descripcion_recibida',
      title: 'Desc. recibida'
    },
  ]
  public data: any[] = [
    {
      nombre_beneficiario: 'Marlon',
      apellido_beneficiario: 'Quinde',
      direccion: 'Casa',
      telefono: '0987654321',
      correo: 'marlon.quindec@ug.edu.ec',
      tipo_ayuda: 'Ayudaaaaa',
      descripcion_recibida: 'Hola mundo'
    }
  ]

  ngOnInit() {
    this.listarBeneficiarios()
  }

  nuevoBeneficiario() {
    this._matDialog.open(FormularioBeneficiarioComponent, {
      disableClose: true,
      data: {
        mensage: 'Nuevo',
        beneficiario: null
      },
      minWidth: '30vw',
      maxHeight: '90vh'
    }).afterClosed().subscribe((res: boolean) => {
      if (res) {
        this.listarBeneficiarios();
      }
    })
  }

  listarBeneficiarios() {
    this._service.listarBeneficiario().subscribe({
      next: () => { },
      error: () => { },
      complete: () => { }
    })
  }

  acciones(event: ActionsEmit) {
    switch (event.action) {
      case 'EDITAR':
        this.abrirEditarBeneficiario(event.value)
        break;
      case 'ELIMINAR':
        this.abrirModalConfirmarEliminar(event.value)
        break;
      case 'NUEVO':
        this.nuevoBeneficiario()
        break;
      case 'FILTRAR':
        // this.nuevoBeneficiario()
        break;
    }
  }

  abrirModalConfirmarEliminar(element: any) {
    Swal.fire({
      title: "Esta seguro que desea eliminar el beneficiario?",
      icon: "warning",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
      showCancelButton: true,
      showCloseButton: false
    }).then((value) => {
      if (value.isConfirmed) {

      }
    });
  }

  abrirEditarBeneficiario(element: any) {
    this._matDialog.open(FormularioBeneficiarioComponent, {
      disableClose: true,
      data: {
        mensage: 'Editar',
        beneficiario: element
      },
      minWidth: '30vw',
      maxHeight: '90vh'
    }).afterClosed().subscribe((res: boolean) => {
      if (res) {
        this.listarBeneficiarios();
      }
    })
  }

}
