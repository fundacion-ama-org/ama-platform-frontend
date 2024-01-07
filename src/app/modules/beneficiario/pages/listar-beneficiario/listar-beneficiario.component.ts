import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FormularioBeneficiarioComponent } from '../../components/formulario-beneficiario/formulario-beneficiario.component';
import Swal from 'sweetalert2';
import { BeneficiarioService } from '../../services/beneficiario.service';

@Component({
  selector: 'app-listar-beneficiario',
  templateUrl: './listar-beneficiario.component.html',
  styleUrl: './listar-beneficiario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarBeneficiarioComponent {
  constructor(private _matDialog: MatDialog, private _service: BeneficiarioService) { }

  vistaModelEliminarConsulta: boolean = false;
  vistaModelEliminar: boolean = false;

  vistaModificarBeneficiario: boolean = false;
  vistaModificarBeneficiarioConfirmacion: boolean = false;
  vistaModificarBeneficiarioExito: boolean = false;

  dataSource: any;
  dataSource1: any[] = [
    {
      numero: 1,
      nombre: 'Hydrogen',
      apellido: 'Hydrogen',
      direccion: 'Guayaquil',
      ayuda: 'Hydrogen',
      descripcion: 'Hydrogen',
    },
    {
      numero: 2,
      nombre: 'Helium',
      apellido: 'Helium',
      direccion: 'Quito',
      ayuda: 'Helium',
      descripcion: 'Helium',
    },
  ];

  displayedColumns: string[] = [
    'numero',
    'nombre',
    'apellido',
    'direccion',
    'ayuda',
    'descripcion',
    'opciones',
  ];

  ngOnInit() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource1);
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



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  abrirModalConfirmarEliminar() {
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

  announceSortChange(sortState: any) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      //this._liveAnnouncer.announce(Sorted ${sortState.direction}ending);
    } else {
      //this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
