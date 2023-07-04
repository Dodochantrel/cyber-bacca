import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class ToolService {
  url = 'http://localhost:3000/tools';

  constructor(private cookieService: CookieService) {}

  async storeData(username : string, password : string): Promise<void> {
    //enregistrer dans le local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  }

  async nmap(formData: any): Promise<void> {
    const url = `${this.url}/nmap`;
    try {
      return axios.post(url, formData)
        .then(response => {
          // Traitez la réponse ici si nécessaire
        })
        .catch(error => {
          // Gérez les erreurs ici si nécessaire
          return error;
        });
    } catch (error) {
      throw error;
    }
  }
}