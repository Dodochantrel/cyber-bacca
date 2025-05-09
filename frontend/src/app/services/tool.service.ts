import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  url = 'http://localhost:3000/tools';

  constructor(private cookieService: CookieService) {}

  async storeData(username : string, password : string, verbose : string): Promise<void> {
    //enregistrer dans le local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('verbose', verbose);
  }

  async nmap(formData: any): Promise<void> {
    const url = `${this.url}/nmap`;
    try {
      return axios.post(url, formData)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
          return error;
        });
    } catch (error) {
      throw error;
    }
  }

  async fping(formData: any): Promise<void> {
    const url = `${this.url}/fping`;
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

  async console(message: string): Promise<String> {
    const url = `${this.url}/command`;
    return 'la commande a été envoyé'
    // try {
    //   return axios.post(url, message)
    //     .then(response => {
    //       return response.data;
    //     })
    //     .catch(error => {
    //       // Gérez les erreurs ici si nécessaire
    //       return error;
    //     });
    // } catch (error) {
    //   throw error;
    // }
  }
}