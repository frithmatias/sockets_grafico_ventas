import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// SOCKETIO
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };

// NG2-CHARTS
import { ChartsModule } from 'ng2-charts';

// COMPONENTS
import { GraficaComponent } from './components/grafica/grafica.component';
import { BarrasComponent } from './components/barras/barras.component';



@NgModule({
  declarations: [
    AppComponent,
    GraficaComponent,
    BarrasComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    ChartsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
