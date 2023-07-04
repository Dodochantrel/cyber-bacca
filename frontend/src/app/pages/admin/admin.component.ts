import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonFormComponent } from 'src/app/components/button_form/button_form.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { XComponent } from 'src/app/icons/x/x.component';

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

export class AdminComponent {
    currentSection: string = 'tool';
    nmap: boolean = false;
    waitingNmap: boolean = true;
    loadingNmap: boolean = false;
    nmapResult: boolean = false;

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
      
}
