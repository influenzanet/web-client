import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home.component';

const homeRoutes: Routes = [
    {
        path: '', component: HomeComponent, // canActivate: [AuthGuard], canActivateChild: [AuthGuard],
        children: [
            /*
            { path: 'constructions', component: ConstructionListComponent },
            { path: 'new-project', component: ConstructionSiteEditorComponent },
            { path: 'home', component: DashboardComponent, canActivate: [ProjectSelectionGuard] },
            { path: 'live-map', component: LiveMapComponent }, // canActivate: [ProjectSelectionGuard] },
            { path: 'statistics', component: ProductionStatisticsComponent }, //, canActivate: [ProjectSelectionGuard] },
            { path: 'notifications', component: NotificationsComponent, canActivate: [ProjectSelectionGuard] },
            {
                path: 'settings', component: SettingsComponent, // canActivate: [ProjectSelectionGuard],
                // canActivateChild: [ProjectSelectionGuard],
                children: [
                    { path: 'general', component: GeneralComponent },
                    { path: 'shifts', component: ShiftsComponent },
                    { path: 'vehicles', component: VehiclesComponent },
                    { path: 'zones', component: ZoneEditorComponent },
                    { path: 'delete-project', component: DeleteProjectComponent },
                    { path: '', redirectTo: 'general', pathMatch: 'full' }
                ]
            },
            { path: '**', redirectTo: 'home' }*/
            /*{ path: '', component: ProjectsComponent, canActivate: [AuthGuard], pathMatch: 'full' },
            { path: ':id', component: ProjectComponent,
                children: [
                    { path: '', component: DashboardComponent, pathMatch: 'full' },
                    { path: 'weather', component: WeatherComponent },
                ]
            },*/
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [

    ]
})
export class HomeRoutingModule { }
