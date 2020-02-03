import { Component, OnInit } from '@angular/core';
import { Car } from '../app.component';
import { HttpService } from '../http.service';

@Component({
	selector: 'app-patch-car',
	templateUrl: './patch-car.component.html',
	styleUrls: [ './patch-car.component.css' ]
})
export class PatchCarComponent implements OnInit {
	carToPatch: Car = new CarTemplate();
	carPatched: Car;

	constructor(private httpService: HttpService) {}

	ngOnInit() {}

	onSubmit() {
		this.httpService.patchCar(this.carToPatch).subscribe((car) => {
			this.carPatched = car;
		});
	}
}

class CarTemplate implements Car {
	constructor() {}
}
