import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetCarsComponent } from './get-cars/get-cars.component';
import { GetCarComponent } from './get-car/get-car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { PutCarComponent } from './put-car/put-car.component';
import { PatchCarComponent } from './patch-car/patch-car.component';
import { DeleteCarComponent } from './delete-car/delete-car.component';

const routes: Routes = [
	{
		path: 'get-cars',
		component: GetCarsComponent
	},
	{
		path: 'get-car',
		component: GetCarComponent
	},
	{
		path: 'add-car',
		component: AddCarComponent
	},
	{
		path: 'put-car',
		component: PutCarComponent
	},
	{
		path: 'patch-car',
		component: PatchCarComponent
	},
	{
		path: 'delete-car',
		component: DeleteCarComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
