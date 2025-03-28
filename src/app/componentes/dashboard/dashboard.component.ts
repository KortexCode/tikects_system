import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgIf } from '@angular/common';
import { ListaTikectsComponent } from '../ver-tikects/lista-tikects.component';
import { CrearTikectsComponent } from '../crear-tikects/crear-tikects.component';
import { ListaUsuariosComponent } from '../lista-usuarios/lista-usuarios.component';
import { ReportesComponent } from '../reportes/reportes.component';
import { StatsComponent } from '../stats/stats.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone:true,
  imports:[NavbarComponent, ListaTikectsComponent, ReportesComponent,ListaUsuariosComponent,
    NgIf, CrearTikectsComponent, MatIconModule, StatsComponent]
})
export class DashboardComponent implements OnInit{
  verStats: boolean = true;
  verTikects: boolean = false;
  verUsuarios: boolean = false;
  verCrearTikects: boolean = false;
  verReportes: boolean = false;
  constructor() {

  }
  ngOnInit(): void {
    
  }

  toggleStats() {
    this.verStats = true,
    this.verCrearTikects = false;
    this.verTikects = false;
    this.verUsuarios = false;
    this.verReportes = false;
  }
  toggleListaTikects() {
    this.verCrearTikects = false;
    this.verTikects = true;
    this.verStats = false
    this.verUsuarios = false;
    this.verReportes = false;
  }
  toggleCrearTikects() {
    this.verStats = false
    this.verCrearTikects = true;
    this.verTikects = false;
    this.verUsuarios = false;
    this.verReportes = false;
  }
  toggleListaUsuarios() {
    this.verStats = false
    this.verCrearTikects = false;
    this.verTikects = false;
    this.verReportes = false;
    this.verUsuarios = true;
  }
  toggleReportes() {
    this.verStats = false
    this.verCrearTikects = false;
    this.verTikects = false;
    this.verUsuarios = false;
    this.verReportes = true;
  }
}
