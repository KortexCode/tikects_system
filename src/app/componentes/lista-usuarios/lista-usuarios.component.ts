import { Component, OnInit, ViewChild } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.scss',
  standalone: true,
  imports: [MatIconModule, MatTableModule, MatFormField, MatLabel, MatPaginator, MatInputModule, NgClass]
})
export class ListaUsuariosComponent implements OnInit{
  //Propiedades para tabla
  displayedColumns: string[] = [
    'acciones',
    'id_usuario',
    'nombre',
    'correo',
    'rol',
    'estado'
  ];

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter:any;
  listaUsuario = [
    { id_usuario: 1, nombre: 'Juan Pérez', correo: 'juan.perez@example.com', rol: 'Administrador', estado: 'Activo' },
    { id_usuario: 2, nombre: 'María Gómez', correo: 'maria.gomez@example.com', rol: 'Soporte', estado: 'Inactivo' },
    { id_usuario: 3, nombre: 'Carlos López', correo: 'carlos.lopez@example.com', rol: 'Usuario', estado: 'Activo' },
    { id_usuario: 4, nombre: 'Ana Torres', correo: 'ana.torres@example.com', rol: 'Supervisor', estado: 'Suspendido' },
    { id_usuario: 5, nombre: 'Pedro Ramírez', correo: 'pedro.ramirez@example.com', rol: 'Administrador', estado: 'Activo' }
  ];

  constructor(){

  }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  listarUsuarios() {
    this.dataSource = new MatTableDataSource(this.listaUsuario)
  }
}
