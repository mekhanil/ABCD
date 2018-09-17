import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OrderonlineComponent } from './orderonline/orderonline.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LocateComponent } from './locate/locate.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrderonlineComponent,
    FeedbackComponent,
    GalleryComponent,
    LocateComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',component:MenuComponent},
      {path:'locate',component:LocateComponent},
      {path:'gallery',component:GalleryComponent},
      {path:'orderonline',component:OrderonlineComponent},
      {path:'feedback',component:FeedbackComponent},
      {path:'**',component:ErrorComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
