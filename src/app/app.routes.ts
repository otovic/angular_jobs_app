import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AddJobComponent } from './pages/add-job/add-job.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: "", component: LandingPageComponent },
    { path: "add_new_job", component: AddJobComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }