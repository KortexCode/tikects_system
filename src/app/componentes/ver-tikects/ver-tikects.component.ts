import { DataSource } from '@angular/cdk/collections';
import { NgClass } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-ver-tikects',
  templateUrl: './ver-tikects.component.html',
  styleUrl: './ver-tikects.component.scss',
  standalone: true,
  imports: [MatIconModule, MatTableModule, MatFormField, MatLabel, MatPaginator, MatInputModule, NgClass]
})
export class VerTikectsComponent implements OnInit{
  //Propiedades para tabla
  displayedColumns: string[] = [
    'acciones',
    'id_tikect',
    'titulo',
    'descripcion',
    'prioridad',
    'categoria'
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter:any;
  tikectList = [
    {
      "id_tikect": 1,
      "titulo": "Problema con inicio de sesión",
      "descripcion": "No puedo acceder a mi cuenta. He intentado restablecer la contraseña, pero no recibo el correo electrónico.",
      "prioridad": "Alta",
      "categoria": "Cuenta"
    },
    {
      "id_tikect": 2,
      "titulo": "Solicitud de nueva funcionalidad",
      "descripcion": "Me gustaría solicitar la adición de una función de búsqueda avanzada a la plataforma.",
      "prioridad": "Media",
      "categoria": "Funcionalidad"
    },
      {
      "id_tikect": 3,
      "titulo": "Error al cargar archivos",
      "descripcion": "No puedo subir archivos PDF a la plataforma. Aparece un mensaje de error.",
      "prioridad": "Alta",
      "categoria": "Archivos"
    },
    {
      "id_tikect": 4,
      "titulo": "Consulta sobre la API",
      "descripcion": "Necesito información sobre cómo utilizar la API para integrar nuestro sistema con la plataforma.",
      "prioridad": "Baja",
      "categoria": "API"
    },
    {
      "id_tikect": 5,
      "titulo": "Problema con la visualización de datos",
      "descripcion": "Los datos en el panel de control no se muestran correctamente. Las gráficas están distorsionadas.",
      "prioridad": "Media",
      "categoria": "Interfaz de usuario"
    }
  ]

  constructor(){

  }

  ngOnInit(): void {
    this.listarTikects();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  listarTikects() {
    this.dataSource = new MatTableDataSource(this.tikectList)
  }

}
