import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { CargaComponent } from './componentes/carga/carga.component';
import { FotosComponent } from './componentes/fotos/fotos.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';

import { FotosService } from './servicios/fotos.service';

@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    FotosComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [FotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
