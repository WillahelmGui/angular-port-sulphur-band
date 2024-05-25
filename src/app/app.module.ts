import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BackgroundComponent } from './shared/background/background.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ButtonComponent } from './shared/button/button.component';
import { ButtonDisplayComponent } from './shared/button-display/button-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { LatestSongDisplayComponent } from './home/latest-song-display/latest-song-display.component';
import { ContainerComponent } from './shared/container/container.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { LastReleaseComponent } from './shop/last-release/last-release.component';
import { MusicComponent } from './pages/music/music.component';
import { BandComponent } from './pages/band/band.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BackgroundComponent,
    FooterComponent,
    ButtonComponent,
    ButtonDisplayComponent,
    LatestSongDisplayComponent,
    ContainerComponent,
    HomeComponent,
    ShopComponent,
    LastReleaseComponent,
    MusicComponent,
    BandComponent
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
