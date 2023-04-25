import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { LoginComponent } from './login/login.component';
import { KatastarHomeComponent } from './katastar-home/katastar-home.component';
import { GradjaninHomeComponent } from './gradjanin-home/gradjanin-home.component';
import { KatastarNewsComponent } from './katastar-news/katastar-news.component';
import { KatastarProfileComponent } from './katastar-profile/katastar-profile.component';
import { KatastarLogoutComponent } from './katastar-logout/katastar-logout.component';
import { NewsOneComponent } from './katastar-news-folder/news-one/news-one.component';
import { NewsTwoComponent } from './katastar-news-folder/news-two/news-two.component';
import { NewsThreeComponent } from './katastar-news-folder/news-three/news-three.component';
import { NewsFourComponent } from './katastar-news-folder/news-four/news-four.component';
import { NewsFiveComponent } from './katastar-news-folder/news-five/news-five.component';
import { NewsSixComponent } from './katastar-news-folder/news-six/news-six.component';


const routes: Routes = [
  {path: '', component: FirstPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'katastar-home', component: KatastarHomeComponent},
  {path: 'gradjanin-home', component: GradjaninHomeComponent},
  {path: 'katastar-news/:id', component: KatastarNewsComponent},
  {path: 'katastar-profile', component: KatastarProfileComponent},
  {path: 'katastar-logout', component: KatastarLogoutComponent},
  {path: 'katastar-news-one', component: NewsOneComponent},
  {path: 'katastar-news-two', component: NewsTwoComponent},
  {path: 'katastar-news-three', component: NewsThreeComponent},
  {path: 'katastar-news-four', component: NewsFourComponent},
  {path: 'katastar-news-five', component: NewsFiveComponent},
  {path: 'katastar-news-six', component: NewsSixComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
