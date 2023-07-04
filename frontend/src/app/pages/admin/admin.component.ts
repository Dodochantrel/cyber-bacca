import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
    selector: 'app-admin',
    standalone: true,
    imports: [
        HeaderComponent,
        CommonModule
    ],
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css'],
})

export class AdminComponent {
    currentSection: string = 'tool';

    showSection(section: string): void {
        this.currentSection = section;
    }
}
