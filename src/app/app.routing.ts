import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ViewComponent } from "./view/view.component";

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'view/:id', component: ViewComponent },
];

export const routingModule = RouterModule.forRoot(APP_ROUTES);