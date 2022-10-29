import { Clima } from './model/clima';
import { ClimaService } from './service/clima.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private service: ClimaService) { }

  nomeCidade: string = 'Santa Maria' ;
  infoClima?: Clima;

  ngOnInit(): void {
    this.getClima(this.nomeCidade);
    this.nomeCidade = '';
  }

  onSubmit() {
    this.getClima(this.nomeCidade);
    this.nomeCidade = '';
  }

  private getClima(nomeCidade:string) {
     this.service.buscarDadosClima(nomeCidade).subscribe({
       next: (response) => {
         this.infoClima = response;
       },
     });
  }

}
