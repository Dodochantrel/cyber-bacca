import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        HeaderComponent,
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})

export class HomeComponent {
}
