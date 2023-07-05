import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonFormComponent } from 'src/app/components/button_form/button_form.component';
import { ChartLineComponent } from 'src/app/components/chart_line/chartLine.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { LockComponent } from 'src/app/icons/lock/lock.component';
import { UserComponent } from 'src/app/icons/user/user.component';
import { XComponent } from 'src/app/icons/x/x.component';
import { ToolService } from 'src/app/services/tool.service';

@Component({
    selector: 'app-admin',
    standalone: true,
    imports: [
        HeaderComponent,
        CommonModule,
        XComponent,
        ButtonFormComponent,
        UserComponent,
        LockComponent,
        ChartLineComponent,
    ],
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css'],
})

export class AdminComponent implements OnInit {
    currentSection: string = 'tool';
    nmap: boolean = false;
    fping: boolean = false;
    waitingNmap: boolean = true;
    loadingNmap: boolean = false;
    nmapResult: boolean = false;
    waitingFping: boolean = true;
    loadingFping: boolean = false;
    fpingResult: boolean = false;

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
            case 'fping':
                this.fping = true;
                break;
        }
    }

    close(){
        this.nmap = false;
    }

    closeFping(){
        this.fping = false;
    }

    onSubmitData(event: Event): void {
        //Supprimer l'effet de recharge de la page
        event.preventDefault();
        const usernameInput = document.querySelector('#username') as HTMLInputElement;
        const passwordInput = document.querySelector('#password') as HTMLInputElement;
        const verboseRadioFalse = document.querySelector('#false') as HTMLInputElement;
        const verboseRadioTrue = document.querySelector('#true') as HTMLInputElement;

        const verboseValue = verboseRadioTrue.checked ? verboseRadioTrue.value : verboseRadioFalse.value;

        const formData = {
            password: passwordInput.value,
            username: usernameInput.value,
            verbose: verboseValue,
        };

        console.log(formData);

        this.toolService.storeData(formData.username, formData.password, formData.verbose)
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

    onSubmitFping(event: Event): void {
        //Supprimer l'effet de recharge de la page
        event.preventDefault();
        const ipInput = document.querySelector('#fping #ip') as HTMLInputElement;
        const aCheckbox = document.querySelector('#fping #-a') as HTMLInputElement;
        const uCheckbox = document.querySelector('#fping #-u') as HTMLInputElement;
        const sCheckbox = document.querySelector('#fping #-s') as HTMLInputElement;
        const nCheckbox = document.querySelector('#fping #-n') as HTMLInputElement;
        const ACheckbox = document.querySelector('#fping #-A') as HTMLInputElement;
        const vCheckbox = document.querySelector('#fping #-v') as HTMLInputElement;

        //récuper dans le localstorage le username et le password
        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');
      
        const formData = {
            ip: ipInput.value,
            a: aCheckbox.checked,
            u: uCheckbox.checked,
            s: sCheckbox.checked,
            n: nCheckbox.checked,
            A: ACheckbox.checked,
            v: vCheckbox.checked,
            password: username,
            username: password,
        };
        this.waitingFping = false;
        this.loadingFping = true;

        this.toolService.fping(formData).then((response) => {
            this.loadingFping = false;
            this.fpingResult = true;
        });
    }
}
