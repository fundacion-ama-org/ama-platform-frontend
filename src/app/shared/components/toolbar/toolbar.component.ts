import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private router: Router) { }

  public sidebarItems = [
    { label: 'Beneficiario', icon: 'redeem', url: './admin/beneficiario' },
    { label: 'Donaciones', icon: 'savings', url: './admin/donaciones' },
    { label: 'Donantes', icon: 'diversity_3', url: './admin/donante' },
    { label: 'Voluntarios', icon: 'volunteer_activism', url: './admin/voluntarios' },
  ];

  public navigate(url: string): void {
    this.router.navigate([url]);
    this.sidenav && this.sidenav.close();
  }
}
