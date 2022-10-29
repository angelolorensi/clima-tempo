import { Clima } from './../model/clima';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  apiKey: string = '022a29ee1801e5829c64f7c296187da5'

  constructor(private httpClient: HttpClient) {
  }

  buscarDadosClima(nomeCidade:string): Observable<Clima>{
    return this.httpClient.get<Clima>('https://api.openweathermap.org/data/2.5/weather?q=' + nomeCidade + '&appid=' + this.apiKey + '&units=metric&lang=pt_br');
  }


}
