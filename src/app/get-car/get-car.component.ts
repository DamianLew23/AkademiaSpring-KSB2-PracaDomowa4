import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Car } from '../app.component';

@Component({
	selector: 'app-get-car',
	templateUrl: './get-car.component.html',
	styleUrls: [ './get-car.component.css' ]
})
export class GetCarComponent implements OnInit {
	idCar: number;
	car: Car;

	constructor(private httpService: HttpService) {}

	ngOnInit() {}

	getCar(idCar: number) {
		this.httpService.getCar(idCar).subscribe((car) => {
			this.car = car;
			console.log(this.car);
		});
	}
}
