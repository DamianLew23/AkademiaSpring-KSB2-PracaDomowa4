import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
	selector: 'app-delete-car',
	templateUrl: './delete-car.component.html',
	styleUrls: [ './delete-car.component.css' ]
})
export class DeleteCarComponent implements OnInit {
	idCar: number;
	isDeleteCar: boolean = false;

	constructor(private httpService: HttpService) {}

	ngOnInit() {}

	deleteCar() {
		this.httpService.deleteCar(this.idCar).subscribe((car) => {
			console.log(car);
		});
		this.isDeleteCar = true;
	}
}
