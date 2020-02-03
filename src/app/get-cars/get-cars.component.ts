import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Car } from '../app.component';

@Component({
	selector: 'app-get-cars',
	templateUrl: './get-cars.component.html',
	styleUrls: [ './get-cars.component.css' ]
})
export class GetCarsComponent implements OnInit {
	cars: Array<Car>;

	constructor(private httpService: HttpService) {}

	ngOnInit() {
		this.getCars();
	}

	getCars() {
		this.httpService.getCars().subscribe((cars) => {
			this.cars = cars;
			console.log(cars);
		});
	}
}
