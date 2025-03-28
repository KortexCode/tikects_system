import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-crear-tikects',
  templateUrl: './crear-tikects.component.html',
  styleUrl: './crear-tikects.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule]
})
export class CrearTikectsComponent implements OnInit{
  ticketFormGroup: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.ticketFormGroup = this._fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      prioridad: ['', Validators.required],
      categoria: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    
  }
}
