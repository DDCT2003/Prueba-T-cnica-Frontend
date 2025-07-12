import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})

export class ConsultaComponent {
  placa: string = '';
  fecha: string = '';
  hora: string = '';
  respuesta: any = null;

  constructor(private http: HttpClient) {}


  ngOnInit() {
    const now = new Date();
    // Formato YYYY-MM-DD
    this.fecha = now.toISOString().split('T')[0];

    // Formato HH:mm, rellena con ceros si hace falta
    const hh = now.getHours().toString().padStart(2, '0');
    const mm = now.getMinutes().toString().padStart(2, '0');
    this.hora = `${hh}:${mm}`;
  }

  consultar() {
    const body = {
      placa: this.placa,
      fecha: this.fecha,
      hora: this.hora
    };

    this.http.post<any>('http://localhost:8080/api/picoyplaca/consulta', body)
      .subscribe(
        resp => this.respuesta = resp,
        err => this.respuesta = { placa: this.placa, mensaje: 'Error de conexión con el servidor.' }
      );
  }
}
