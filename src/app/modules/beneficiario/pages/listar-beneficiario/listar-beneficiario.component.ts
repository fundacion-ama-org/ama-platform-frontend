import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-listar-beneficiario',
  templateUrl: './listar-beneficiario.component.html',
  styleUrl: './listar-beneficiario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarBeneficiarioComponent { }
