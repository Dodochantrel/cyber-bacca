import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonFormComponent } from 'src/app/components/button_form/button_form.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { XComponent } from 'src/app/icons/x/x.component';
import { ToolService } from 'src/app/services/tool.service';

@Component({
    selector: 'app-admin',
    standalone: true,
    imports: [
        HeaderComponent,
        CommonModule,
        XComponent,
        ButtonFormComponent
    ],
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css'],
})

export class AdminComponent implements OnInit {
    currentSection: string = 'tool';
    nmap: boolean = false;
    waitingNmap: boolean = true;
    loadingNmap: boolean = false;
    nmapResult: boolean = false;

    constructor(private toolService: ToolService) {}

    ngOnInit(): void {
        // Récupérer les données du localStorage
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
    
        // Mettre à jour les valeurs des champs d'entrée
        if(storedUsername && storedPassword){
            const usernameInput = document.querySelector('#username') as HTMLInputElement;
            const passwordInput = document.querySelector('#password') as HTMLInputElement;
            usernameInput.value = storedUsername;
            passwordInput.value = storedPassword;
        }
      }

    showSection(section: string): void {
        this.currentSection = section;
    }

    showForm(form: string): void {
        switch (form) {
            case 'nmap':
                this.nmap = true;
                break;
        }
    }

    close(){
        this.nmap = false;
    }

    onSubmitData(event: Event): void {
        //Supprimer l'effet de recharge de la page
        event.preventDefault();
        const usernameInput = document.querySelector('#username') as HTMLInputElement;
        const passwordInput = document.querySelector('#password') as HTMLInputElement;

        const formData = {
            password: passwordInput.value,
            username: usernameInput.value,
        };

        this.toolService.storeData(formData.username, formData.password);

    }
      
    onSubmitNmap(event: Event): void {
        //Supprimer l'effet de recharge de la page
        event.preventDefault();
        const ipInput = document.querySelector('#nmap #ip') as HTMLInputElement;
        const sVCheckbox = document.querySelector('#nmap #-sV') as HTMLInputElement;
        const sSCheckbox = document.querySelector('#nmap #-sS') as HTMLInputElement;
        const sUCheckbox = document.querySelector('#nmap #-sU') as HTMLInputElement;
        const t4Checkbox = document.querySelector('#nmap #-T4') as HTMLInputElement;
        const aCheckbox = document.querySelector('#nmap #-A') as HTMLInputElement;
        const vCheckbox = document.querySelector('#nmap #-v') as HTMLInputElement;

        //récuper dans le localstorage le username et le password
        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');
      
        const formData = {
            ip: ipInput.value,
            sV: sVCheckbox.checked,
            sS: sSCheckbox.checked,
            sU: sUCheckbox.checked,
            t4: t4Checkbox.checked,
            a: aCheckbox.checked,
            v: vCheckbox.checked,
            password: username,
            username: password,
        };
        this.waitingNmap = false;
        this.loadingNmap = true;

        this.toolService.nmap(formData).then((response) => {
            this.loadingNmap = false;
            this.nmapResult = true;
        });
    }
}
