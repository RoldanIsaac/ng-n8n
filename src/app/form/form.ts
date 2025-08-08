import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {
  miFormulario: FormGroup;
  mensajeExito: string = '';
  error: string = '';

  apiUrl =
    'https://olimedia.app.n8n.cloud/webhook-test/d3237f8f-28db-406a-b0c1-7d9a7d672a54';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.miFormulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: [''],
    });
  }

  onSubmit() {
    if (this.miFormulario.valid) {
      return;
    }
    const formData = this.miFormulario.value;

    this.http.post(this.apiUrl, formData).subscribe({
      next: (response) => {
        this.mensajeExito = 'Formulario enviado con éxito!';
        this.miFormulario.reset();
        this.error = '';
      },
      error: (err) => {
        this.error = 'Error al enviar el formulario. Intenta nuevamente.';
        console.error('Error:', err);
      },
    });
  }
}
