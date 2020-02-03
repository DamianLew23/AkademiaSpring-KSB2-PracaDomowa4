import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetCarsComponent } from './get-cars/get-cars.component';
import { GetCarComponent } from './get-car/get-car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { PutCarComponent } from './put-car/put-car.component';
import { PatchCarComponent } from './patch-car/patch-car.component';
import { DeleteCarComponent } from './delete-car/delete-car.component';
import { HttpService } from './http.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		GetCarsComponent,
		GetCarComponent,
		AddCarComponent,
		PutCarComponent,
		PatchCarComponent,
		DeleteCarComponent
	],
	imports: [ BrowserModule, AppRoutingModule, HttpClientModule, FormsModule ],
	providers: [ HttpService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
