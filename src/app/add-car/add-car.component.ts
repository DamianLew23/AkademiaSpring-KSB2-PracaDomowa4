import { Component, OnInit } from '@angular/core';
import { Car } from '../app.component';
import { HttpService } from '../http.service';

@Component({
	selector: 'app-add-car',
	templateUrl: './add-car.component.html',
	styleUrls: [ './add-car.component.css' ]
})
export class AddCarComponent implements OnInit {
	carToAdd: Car = new CarTemplate();
	carAdded: Car;

	constructor(private httpService: HttpService) {}

	ngOnInit() {}

	onSubmit() {
		this.httpService.addCar(this.carToAdd).subscribe((car) => {
			this.carAdded = car;
			console.log(car);
		});
	}
}

class CarTemplate implements Car {
	constructor() {}
}
