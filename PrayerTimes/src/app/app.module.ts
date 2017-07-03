import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { MasjidComponent } from './components/masjid/masjid.component';

@NgModule({
  declarations: [
    AppComponent,
    MasjidComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
  {
    path: 'masjid',
    component: MasjidComponent
  }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
