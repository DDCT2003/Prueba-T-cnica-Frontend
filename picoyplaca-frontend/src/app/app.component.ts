import { Component } from '@angular/core';
import { ConsultaComponent } from './consulta/consulta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ConsultaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
