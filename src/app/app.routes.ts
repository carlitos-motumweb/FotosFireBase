import { RouterModule, Routes } from '@angular/router';
import { CargaComponent } from './componentes/carga/carga.component';
import { FotosComponent } from './componentes/fotos/fotos.component';

const APP_ROUTES: Routes = [
    { path: 'carga', component: CargaComponent },
    { path: 'fotos', component: FotosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'fotos' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
