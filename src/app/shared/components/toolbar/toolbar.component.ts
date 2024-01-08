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
    { label: 'Beneficiario', icon: 'label', url: './admin/beneficiario' },
    { label: 'Donaciones', icon: 'label', url: './admin/donaciones' },
    { label: 'Donantes', icon: 'label', url: './admin/donante' },

  ];

  public navigate(url: string): void {
    this.router.navigate([url]);
  }
}
