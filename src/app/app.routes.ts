import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlantListComponent } from './_plants/plant-list/plant-list.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'_plantlist',component:PlantListComponent}
];
