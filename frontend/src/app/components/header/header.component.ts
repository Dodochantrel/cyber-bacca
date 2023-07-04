import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserComponent } from 'src/app/icons/user/user.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        RouterLink,
        UserComponent,
        CommonModule
    ],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})

export class HeaderComponent {

  }
