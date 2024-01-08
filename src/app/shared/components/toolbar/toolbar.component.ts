import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  constructor(private router: Router) { }

  public sidebarItems = [
<<<<<<< HEAD
    { label: 'Beneficiario', icon: 'label', url: './list' },
    { label: 'Donaciones', icon: 'label', url: './list' },
    { label: 'Donantes', icon: 'label', url: './donante/homeDonante' },
    { label: 'Beneficiarios', icon: 'label', url: './beneficiario' },
    { label: 'Voluntarios', icon: 'volunteer_activism', url: './voluntarios/listar' },
=======
    { label: 'Beneficiario', icon: 'label', url: './admin/beneficiario' },
    { label: 'Donaciones', icon: 'label', url: './admin/donaciones' },
    { label: 'Donantes', icon: 'label', url: './admin/donante' },
>>>>>>> 104d71ced2dae1f94207224d7bda0c60a47feb38

  ];

  public navigate(url: string): void {
    this.router.navigate([url]);
  }
}
