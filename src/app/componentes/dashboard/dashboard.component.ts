import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgIf } from '@angular/common';
import { VerTikectsComponent } from '../ver-tikects/ver-tikects.component';
import { CrearTikectsComponent } from '../crear-tikects/crear-tikects.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone:true,
  imports:[NavbarComponent, VerTikectsComponent, NgIf, CrearTikectsComponent, MatIconModule]
})
export class DashboardComponent implements OnInit{
  stats: boolean = true;
  verTikects: boolean = false;
  crearTikects: boolean = false;
  constructor() {

  }
  ngOnInit(): void {
    
  }

  verListatikects() {
    this.stats = false
    this.crearTikects = false;
    this.verTikects = true;
  }
  verCrearTikects() {
    this.stats = false
    this.crearTikects = true;
    this.verTikects = false;
  }
}
