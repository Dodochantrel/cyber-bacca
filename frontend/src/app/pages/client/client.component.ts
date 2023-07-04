import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
    selector: 'app-client',
    standalone: true,
    imports: [
        HeaderComponent
    ],
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.css'],
})

export class ClientComponent {

}
