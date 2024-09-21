import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from '../types/image.interface';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class HttpMethodsService {
  imagesUrl = environment.gitJSON
  constructor(private readonly httpClient: HttpClient) { }

  getImages(){
    return this.httpClient.get<Image[]>(this.imagesUrl)    
  }
}
