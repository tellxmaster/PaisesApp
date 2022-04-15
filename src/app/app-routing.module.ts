import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {
        path: '', //Simula el URL
        component: PorPaisComponent,
        pathMatch: 'full',
    },
    {
        path: 'region',
        component: PorRegionComponent,
    },
    {
        path: 'capital',
        component: PorCapitalComponent,
    },
    {
        path: 'pais/:id', //id del pais para mostrar
        component: VerPaisComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    declarations: [
        
    ],
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ]
})

export class AppRoutingModule {}