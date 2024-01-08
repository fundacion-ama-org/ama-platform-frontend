import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Router, RouterModule } from '@angular/router';
import { MatSidenavContainer } from '@angular/material/sidenav';

@Component({
  selector: 'app-vertical',
  standalone: true,
  templateUrl: './vertical.component.html',
  styleUrl: './vertical.component.scss',
  imports: [
    SharedModule,
    RouterModule
  ]
})
export class VerticalComponent {

  @ViewChild('sidenav') sidenav!: MatSidenavContainer;

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
