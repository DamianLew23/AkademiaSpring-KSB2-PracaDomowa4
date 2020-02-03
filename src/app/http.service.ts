import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './app.component';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class HttpService {
	constructor(private http: HttpClient) {}

	getCars(): Observable<Array<Car>> {
		return this.http.get<Array<Car>>('http://localhost:8080/cars');
	}

	getCar(id: number): Observable<Car> {
		return this.http.get<Car>('http://localhost:8080/cars/' + id);
	}

	addCar(car: Car): Observable<Car> {
		return this.http.post<Car>('http://localhost:8080/cars/', car);
	}

	updateCar(car: Car): Observable<Car> {
		return this.http.put('http://localhost:8080/cars/' + car.id, car);
	}

	patchCar(car: Car): Observable<Car> {
		return this.http.patch('http://localhost:8080/cars/' + car.id, car);
	}

	deleteCar(id: number): Observable<Car> {
		return this.http.delete<Car>('http://localhost:8080/cars/' + id);
	}
}
