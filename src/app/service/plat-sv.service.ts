import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plat } from '../plat/plat';


const URL = "http://localhost:1300/plats";


@Injectable({
  providedIn: 'root'
})

export class PlatService {
  
  constructor(private  http:HttpClient) { }

  getPlats(): Observable<Plat[]>{
    return this.http.get<Plat[]>(URL+"/getPlats");
  }

  getPlatById(id:number):Observable<Plat[]>{
    return this.http.get<Plat[]>(URL+"/"+id);
  }

  addPlat(Plat:Plat): Observable<Plat>{
    return this.http.post<Plat>(URL+"/create", Plat);
  }

  deletePlat(id:number){
    return this.http.delete(URL+"/"+id+"/delete");
  }

  EditPlat(id:number, Plat:Plat): Observable<Plat>{
    return this.http.put<Plat>(URL+"/"+id+"/update", Plat);
  }

}
