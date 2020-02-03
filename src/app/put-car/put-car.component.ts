import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Car } from '../app.component';

@Component({
	selector: 'app-put-car',
	templateUrl: './put-car.component.html',
	styleUrls: [ './put-car.component.css' ]
})
export class PutCarComponent implements OnInit {
	carToUpdate: Car = new CarTemplate();
	carUpdated: Car;

	constructor(private httpService: HttpService) {}

	ngOnInit() {}

	onSubmit() {
		this.httpService.updateCar(this.carToUpdate).subscribe((car) => {
			this.carUpdated = car;
		});
	}
}

class CarTemplate implements Car {
	constructor() {}
}
