import { environment } from './../../environments/environment.prod';
import { Clima } from './../model/clima';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private httpClient: HttpClient) {
  }

  buscarDadosClima(nomeCidade:string): Observable<Clima>{
    return this.httpClient.get<Clima>('https://api.openweathermap.org/data/2.5/weather?q=' + nomeCidade + '&appid=' + environment.apikey + '&units=metric&lang=pt_br');
  }


}
