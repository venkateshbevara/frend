import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tourist } from './tourist';

@Injectable({
  providedIn: 'root'
})
export class TouristService {
  httpOptionsPost = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept, X-Custom-Header, Upgrade-Insecure-Requests',
    })
  };

  constructor(private http:HttpClient) { }

  getuserdata():Observable<Tourist[]>{
    return this.http.get<Tourist[]>('http://localhost:4000/tourists/getalltourists');
  }
  postuserdata(user:Tourist):Observable<string>{
    return this.http.post<string>('http://localhost:4000/tourists/registertourist',user,this.httpOptionsPost);
  }
}
