
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
/*Service*/
import { DataService} from './sys/service/data.service'
import { InitService } from './sys/service/init.service';
/*component*/ 
import { AppComponent } from './app.component';
import { NavComponent } from './sys/nav/nav.component';
import { HomeComponent } from './hhj/home/home.component';
import { AboutComponent } from './hhj/about/about.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService, InitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
