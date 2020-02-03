import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'teai-pracadomowa4';
}

export interface Car {
	id?: number;
	mark?: string;
	model?: string;
	color?: string;
}
