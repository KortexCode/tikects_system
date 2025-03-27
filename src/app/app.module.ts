import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { VerTikectsComponent } from './componentes/ver-tikects/ver-tikects.component';
import { CrearTikectsComponent } from './componentes/crear-tikects/crear-tikects.component';

/* import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper'; */

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    VerTikectsComponent,
    CrearTikectsComponent,

  ],
  imports: [
    BrowserModule,
    RouterOutlet,
   /*  AppRoutingModule, */
    FormsModule,
  /*   MaterialModule, */
    HttpClientModule,
   /*  MatIconModule,
    MatStepperModule, */
  ],
  /* providers: [provideAnimationsAsync(), {
    provide: HTTP_INTERCEPTORS,
    useClass: addTokenInterceptor,
    multi: true
  }], */
  bootstrap: [AppComponent],
})
export class AppModule {}
