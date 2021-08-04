import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/Models/City';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  private url:string;
  constructor(private http: HttpClient) 
  {
    this.url =  "https://6r7jd9lz8a.execute-api.us-east-1.amazonaws.com/Prod/api/nativecity";
  }

  getData(): Observable<City[]> {
    return this.http.get<City[]>(this.url);
  }
}
