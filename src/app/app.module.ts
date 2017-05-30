import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MapService } from './shared/map.service';
import { ConfigToken, DevConfig } from './shared/config.service';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { BusesComponent } from './buses/buses.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BusesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MapService, { provide: ConfigToken, useValue: DevConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
