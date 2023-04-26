import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { RouterModule } from '@angular/router';
//import { ToastrModule } from 'ngx-toastr/toastr/toastr.module';
import { LoginComponent } from './login/login.component';
import { KatastarHomeComponent } from './katastar-home/katastar-home.component';
import { GradjaninHomeComponent } from './gradjanin-home/gradjanin-home.component';
import { KatastarNewsComponent } from './katastar-news/katastar-news.component';
import { KatastarProfileComponent } from './katastar-profile/katastar-profile.component';
import { KatastarLogoutComponent } from './katastar-logout/katastar-logout.component';
import { NewsService } from './service/NewsService';
import { NewsOneComponent } from './katastar-news-folder/news-one/news-one.component';
import { NewsTwoComponent } from './katastar-news-folder/news-two/news-two.component';
import { NewsThreeComponent } from './katastar-news-folder/news-three/news-three.component';
import { NewsFourComponent } from './katastar-news-folder/news-four/news-four.component';
import { NewsFiveComponent } from './katastar-news-folder/news-five/news-five.component';
import { NewsSixComponent } from './katastar-news-folder/news-six/news-six.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GradjaninProfileComponent } from './gradjanin-profile/gradjanin-profile.component';
import { GradjaninMaticarComponent } from './gradjanin-maticar/gradjanin-maticar.component';
import { GradjaninNotarComponent } from './gradjanin-notar/gradjanin-notar.component';
import { GradjaninKatastarComponent } from './gradjanin-katastar/gradjanin-katastar.component';
import { MaticarHomeComponent } from './maticar-home/maticar-home.component';
import { NotarHomeComponent } from './notar-home/notar-home.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    LoginComponent,
    KatastarHomeComponent,
    GradjaninHomeComponent,
    KatastarNewsComponent,
    KatastarProfileComponent,
    KatastarLogoutComponent,
    NewsOneComponent,
    NewsTwoComponent,
    NewsThreeComponent,
    NewsFourComponent,
    NewsFiveComponent,
    NewsSixComponent,
    NotFoundComponent,
    GradjaninProfileComponent,
    GradjaninMaticarComponent,
    GradjaninNotarComponent,
    GradjaninKatastarComponent,
    MaticarHomeComponent,
    NotarHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: 'login', component: LoginComponent }]),

    // ToastrModule.forRoot({
    //   positionClass :'toast-bottom-right'
    // })
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
