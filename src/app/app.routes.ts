import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { signInGuard } from './pages/sign-in-page/guard/sign-in.guard';
import { AddJobPageComponent } from './pages/add-job/add-job-page.component';
import { addJobGuard } from './pages/add-job/guard/add-job.guard';
import { ProfileOverviewPageComponent } from './pages/profile-overview-page/profile-overview-page.component';
import { profileOverviewGuard } from './pages/profile-overview-page/guard/profile-overview.guard';

export const routes: Routes = [
    { path: "", component: LandingPageComponent },
    { path: "add_new_job", component: AddJobPageComponent, canActivate: [addJobGuard] },
    { path: "sign_in", component: SignInPageComponent, canActivate: [signInGuard] },
    { path: "profile_overview", component: ProfileOverviewPageComponent, canActivate: [profileOverviewGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }