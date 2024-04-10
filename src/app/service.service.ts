import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from './config';
import { Observable } from 'rxjs';
import { RequestBody } from './request-body';
import { environment } from './environment';
import { PredictionResponse } from './prediction-response';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  getdata(url: string) {
    console.log('service');
    return this.http.get(url);
  }

  url = 'https://api.replicate.com/v1/predictions';
  token = '';

  postRequest(data: any) {
    const url = 'http://localhost:3000/makePrediction'; // URL to your Express route
    return this.http.post<any>(url, data);
  }
  getRequest(geturl: string): Observable<any> {
    const url = 'http://localhost:3000/makePrediction';
    //const url = geturl; // URL to your Express route
    console.log('ss');
    console.log(geturl);
    const queryParams = `?url=${encodeURIComponent(geturl)}`;
    return this.http.get<any>(`${url}${queryParams}`);
  }
}
